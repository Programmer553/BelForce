import { useMemo, useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { apiFetch } from '../../utils/apiClient';
import { env } from '../../utils/env';
import { loadRazorpayCheckout } from '../../utils/razorpay';

const USE_OPTIONS = [
  { value: 'seller', label: 'Seller', desc: 'Sell used electronics faster' },
  { value: 'buyer', label: 'Buyer', desc: 'Buy verified items with confidence' },
];

function EnterYourDetails() {
  const [searchParams] = useSearchParams();
  const planRaw = searchParams.get('plan');
  const plan =
    planRaw === 'pro' || planRaw === 'promax' || planRaw === 'dummy_plan' ? planRaw : 'pro';
  const choosePlanHref = `/membership-plans/choose-plan?plan=${plan}`;

  const [form, setForm] = useState({
    fullName: '',
    countryCode: '+91',
    phone: '',
    email: '',
    address: '',
    useType: 'seller',
  });
  const [saving, setSaving] = useState(false);
  const [verifyingPayment, setVerifyingPayment] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [existingMembership, setExistingMembership] = useState(null);

  const navigate = useNavigate();

  const normalizePhoneDigits = (value) => String(value || '').replace(/\D/g, '').slice(0, 10);

  const validatePhone = (digits) => {
    const v = normalizePhoneDigits(digits);
    if (v.length !== 10) return 'Phone number must be exactly 10 digits';
    if (/^0{10}$/.test(v)) return 'Please enter a valid phone number';
    return null;
  };

  const validateEmail = (value) => {
    const email = String(value || '').trim();
    if (!email) return 'Valid email is required';
    if (email.length > 254) return 'Email is too long';
    if (/\s/.test(email)) return 'Email must not contain spaces';
    if (email.includes('..')) return 'Email looks invalid';

    const parts = email.split('@');
    if (parts.length !== 2) return 'Valid email is required';
    const [local, domain] = parts;
    if (!local || !domain) return 'Valid email is required';
    if (local.length > 64) return 'Email looks invalid';
    if (local.startsWith('.') || local.endsWith('.')) return 'Email looks invalid';
    if (!domain.includes('.')) return 'Email looks invalid';
    if (domain.startsWith('-') || domain.endsWith('-')) return 'Email looks invalid';
    if (domain.startsWith('.') || domain.endsWith('.')) return 'Email looks invalid';

    // Stricter-but-safe pattern (still not a guarantee the inbox exists)
    const ok = /^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i.test(email);
    if (!ok) return 'Email looks invalid';

    const tld = domain.split('.').pop() || '';
    if (!/^[a-z]{2,24}$/i.test(tld)) return 'Email looks invalid';

    return null;
  };

  const setFieldError = (name, message) => {
    setFieldErrors((prev) => {
      if (!message && !prev?.[name]) return prev;
      const next = { ...(prev || {}) };
      if (!message) delete next[name];
      else next[name] = message;
      return next;
    });
  };

  const planSummary = useMemo(() => {
    if (plan === 'dummy_plan') {
      return {
        badge: 'Test',
        name: 'Dummy Plan (Test)',
        price: '₹1 — test payment',
        bullets: [
          'Full Razorpay checkout flow',
          'Backend verify + redirect',
          'Receipt email if SMTP is configured',
        ],
      };
    }
    if (plan === 'pro') {
      return {
        badge: null,
        name: 'BelForce Pro Plan',
        price: '599 / lifetime',
        bullets: [
          'Access to standard seller tools',
          'Standard visibility & chat access',
          'Basic electronics valuation',
          'Standard pickup options',
        ],
      };
    }
    return {
      badge: 'Best Value',
      name: 'BelForce Pro Max Plan',
      price: '999 / year',
      bullets: [
        'Access to premium buyer tools',
        'Priority support & faster transactions',
        'Exclusive seller insights & analytics',
        'No listing fees on first 20 items',
      ],
    };
  }, [plan]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const nextPhone = normalizePhoneDigits(value);
      setForm((prev) => ({ ...prev, phone: nextPhone }));
      if (touched.phone) setFieldError('phone', validatePhone(nextPhone));
      return;
    }

    if (name === 'email') {
      setForm((prev) => ({ ...prev, email: value }));
      if (touched.email) setFieldError('email', validateEmail(value));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched?.[name]) setFieldError(name, null);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...(prev || {}), [name]: true }));

    if (name === 'phone') setFieldError('phone', validatePhone(value));
    if (name === 'email') setFieldError('email', validateEmail(value));
  };

  const validate = () => {
    const errors = {};

    const fullName = String(form.fullName || '').trim();
    const phoneDigits = normalizePhoneDigits(form.phone);
    const email = String(form.email || '').trim();
    const address = String(form.address || '').trim();
    const useType = String(form.useType || '').trim();

    if (fullName.length < 2) errors.fullName = 'Full name is required';
    const phoneErr = validatePhone(phoneDigits);
    if (phoneErr) errors.phone = phoneErr;
    const emailErr = validateEmail(email);
    if (emailErr) errors.email = emailErr;
    if (address.length < 5) errors.address = 'Address is required';
    if (!useType) errors.useType = 'Please select how you will use BelForce';

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleContinueToPay = async (e) => {
    e.preventDefault();
    if (saving) return;
    if (!validate()) return;

    try {
      setSaving(true);
      setSubmitError('');
      setExistingMembership(null);

      const result = await apiFetch('/memberships/registrations', {
        method: 'POST',
        body: JSON.stringify({
          plan,
          ...form,
          phone: `${form.countryCode}${normalizePhoneDigits(form.phone)}`,
        }),
      });

      const order = await apiFetch('/payments/razorpay/order', {
        method: 'POST',
        body: JSON.stringify({ registrationId: result.id }),
      });

      const ok = await loadRazorpayCheckout();
      if (!ok) throw new Error('Failed to load Razorpay. Please try again.');

      const key = env.razorpayKeyId || order.keyId;
      if (!key) throw new Error('Missing Razorpay Key ID (set VITE_RAZORPAY_KEY_ID)');

      const rz = new window.Razorpay({
        key,
        amount: order.amount,
        currency: order.currency,
        name: 'BelForce',
        description: `Membership payment (${plan})`,
        order_id: order.orderId,
        prefill: {
          name: form.fullName,
          email: form.email,
          contact: `${form.countryCode}${normalizePhoneDigits(form.phone)}`,
        },
        notes: {
          membershipId: order.membershipId,
          registrationId: order.registrationId,
          plan: order.plan,
        },
        handler: async (response) => {
          setVerifyingPayment(true);
          try {
            await apiFetch('/payments/razorpay/verify', {
              method: 'POST',
              body: JSON.stringify({
                registrationId: result.id,
                ...response,
              }),
            });

            navigate(`/membership-plans/payment-success?plan=${plan}`, {
              state: {
                fullName: form.fullName || 'Member',
                membershipId: result.membershipId,
                email: form.email,
                phone: `${form.countryCode}${normalizePhoneDigits(form.phone)}`,
                address: form.address,
                useType: form.useType,
                amountInr: Number(order.amount) / 100,
                currency: order.currency,
                razorpayOrderId: response?.razorpay_order_id || order.orderId,
                razorpayPaymentId: response?.razorpay_payment_id,
              },
            });
          } catch (err) {
            setSubmitError(err?.message || 'Payment verification failed. Please contact support.');
          } finally {
            setVerifyingPayment(false);
          }
        },
        modal: {
          ondismiss: () => {
            setSubmitError('Payment cancelled. You can try again.');
          },
        },
        theme: { color: '#111827' },
      });

      rz.open();
    } catch (err) {
      if (err?.status === 409 && err?.data?.existing) {
        setExistingMembership(err.data.existing);
        return;
      }
      setSubmitError(err?.message || 'Failed to save your details. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const existingPlanLabel =
    existingMembership?.plan === 'dummy_plan'
      ? 'Dummy Plan (Test)'
      : existingMembership?.plan === 'promax'
        ? 'BelForce Pro Max Plan'
        : 'BelForce Pro Plan';

  return (
    <div className="enter-details">
      {verifyingPayment && (
        <div className="bf-loading-overlay" role="status" aria-live="polite" aria-label="Verifying payment">
          <div className="bf-loading-card">
            <div className="bf-spinner" aria-hidden />
            <div className="bf-loading-title">Processing payment…</div>
            <div className="bf-loading-subtitle">Please don’t close or refresh this page.</div>
          </div>
        </div>
      )}
      {existingMembership ? (
        <div
          className="enter-details__modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="existing-membership-title"
          onClick={() => setExistingMembership(null)}
        >
          <div className="enter-details__modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="enter-details__modal-badge">Already Active</div>
            <h2 id="existing-membership-title" className="enter-details__modal-title">
              Membership already exists
            </h2>
            <p className="enter-details__modal-text">
              We found a <strong>paid</strong> membership for <strong>{existingMembership.email}</strong>.
            </p>

            <div className="enter-details__modal-summary">
              <div className="enter-details__modal-row">
                <span>Plan</span>
                <strong>{existingPlanLabel}</strong>
              </div>
              <div className="enter-details__modal-row">
                <span>Membership ID</span>
                <strong>{existingMembership.membershipId}</strong>
              </div>
            </div>

            <div className="enter-details__modal-actions">
              <button type="button" className="enter-details__modal-btn enter-details__modal-btn--ghost" onClick={() => setExistingMembership(null)}>
                Close
              </button>
              <button
                type="button"
                className="enter-details__modal-btn"
                onClick={() => {
                  navigate(`/membership-plans/payment-success?plan=${existingMembership.plan}`, {
                    state: {
                      fullName: existingMembership.fullName || form.fullName || 'Member',
                      membershipId: existingMembership.membershipId,
                    },
                  });
                }}
              >
                View membership
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <nav className="enter-details__nav">
        <Link to={choosePlanHref} className="enter-details__back" aria-label="Back to plan">
          ‹ <span className="enter-details__back-text">Back to Plan</span>
        </Link>
        <h1 className="enter-details__nav-title">Enter Your Details</h1>
      </nav>

      <div className="enter-details__layout">
        <div className="enter-details__card">
          <h2 className="enter-details__heading">Personal Information</h2>

        <div className="enter-details__field">
          <label htmlFor="fullName" className="enter-details__label">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Jane Doe"
            value={form.fullName}
            onChange={handleChange}
            className="enter-details__input"
            required
          />
          {fieldErrors.fullName ? (
            <span role="alert" style={{ display: 'block', marginTop: 6, color: '#dc2626', fontWeight: 600 }}>
              {fieldErrors.fullName}
            </span>
          ) : null}
        </div>

        <div className="enter-details__field">
          <label htmlFor="phone" className="enter-details__label">Phone Number</label>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <select
              id="countryCode"
              name="countryCode"
              value={form.countryCode}
              onChange={handleChange}
              className="enter-details__input"
              style={{ width: 92, paddingLeft: 10, paddingRight: 10 }}
              aria-label="Country code"
            >
              <option value="+91">+91 (IN)</option>
            </select>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="10-digit mobile number"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className="enter-details__input"
              maxLength={10}
              required
            />
          </div>
          <span className="enter-details__helper">This will be your primary login.</span>
          {fieldErrors.phone ? (
            <span role="alert" style={{ display: 'block', marginTop: 6, color: '#dc2626', fontWeight: 600 }}>
              {fieldErrors.phone}
            </span>
          ) : null}
        </div>

        <div className="enter-details__field">
          <label htmlFor="email" className="enter-details__label">Email ID</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane.doe@example.com"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="enter-details__input"
            required
          />
          <span className="enter-details__helper">Used for updates & membership confirmation.</span>
          {fieldErrors.email ? (
            <span role="alert" style={{ display: 'block', marginTop: 6, color: '#dc2626', fontWeight: 600 }}>
              {fieldErrors.email}
            </span>
          ) : null}
        </div>

        <div className="enter-details__field">
          <label htmlFor="address" className="enter-details__label">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="456 Oak Ave, Cityville, State 12345"
            value={form.address}
            onChange={handleChange}
            className="enter-details__input"
            required
          />
          <span className="enter-details__helper">For service-related use.</span>
          {fieldErrors.address ? (
            <span role="alert" style={{ display: 'block', marginTop: 6, color: '#dc2626', fontWeight: 600 }}>
              {fieldErrors.address}
            </span>
          ) : null}
        </div>

        <div className="enter-details__section">
          <h3 className="enter-details__section-heading">How will you mainly use BelForce?</h3>
          <p className="enter-details__section-helper">This helps us personalize your experience.</p>
          <div className="enter-details__radio-group">
            {USE_OPTIONS.map((opt) => (
              <label key={opt.value} className="enter-details__radio-label">
                <input
                  type="radio"
                  name="useType"
                  value={opt.value}
                  checked={form.useType === opt.value}
                  onChange={handleChange}
                  className="enter-details__radio"
                  required
                />
                <div className="enter-details__radio-copy">
                  <span className="enter-details__radio-text">{opt.label}</span>
                  <span className="enter-details__radio-desc">{opt.desc}</span>
                </div>
              </label>
            ))}
          </div>
          {fieldErrors.useType ? (
            <span role="alert" style={{ display: 'block', marginTop: 6, color: '#dc2626', fontWeight: 600 }}>
              {fieldErrors.useType}
            </span>
          ) : null}
        </div>

        <p className="enter-details__secure">
          Your data is 100% secure and protected
          <span className="enter-details__secure-icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </span>
        </p>

        <div className="enter-details__actions">
          <button type="button" className="enter-details__submit" onClick={handleContinueToPay} disabled={saving}>
            {saving ? <span className="bf-btn-spinner" aria-hidden /> : 'Continue to Pay'}
          </button>
          <span className="enter-details__save">Save for later</span>
        </div>
        {submitError ? (
          <p role="alert" style={{ marginTop: 12, color: '#dc2626', fontWeight: 600 }}>
            {submitError}
          </p>
        ) : null}
      </div>

        <aside className="enter-details__summary" aria-label="Selected Plan Summary">
          {planSummary.badge ? <div className="enter-details__summary-badge">{planSummary.badge}</div> : null}
          <h3 className="enter-details__summary-title">Selected Plan Summary</h3>
          <div className="enter-details__summary-plan">{planSummary.name}</div>
          <div className="enter-details__summary-price">{planSummary.price}</div>

          <div className="enter-details__summary-section">What you get:</div>
          <ul className="enter-details__summary-list">
            {planSummary.bullets.map((b) => (
              <li key={b} className="enter-details__summary-item">
                <span className="enter-details__summary-check" aria-hidden>✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <Link to={choosePlanHref} className="enter-details__edit">Edit Plan</Link>

          <div className="enter-details__summary-divider" />

          <div className="enter-details__razor">
            <span className="enter-details__lock" aria-hidden>🔒</span>
            <span>Secure Payment via</span>
            <span className="enter-details__razorpay">Razorpay</span>
          </div>
          <button type="button" className="enter-details__support">
            Contact Support
          </button>
        </aside>
      </div>

      <p className="enter-details__copyright">copyright 2026 - BelForce</p>
    </div>
  );
}

export default EnterYourDetails;
