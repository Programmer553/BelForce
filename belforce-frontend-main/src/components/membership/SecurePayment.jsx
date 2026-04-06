import { useState } from 'react';
import { Link, useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { apiFetch } from '../../utils/apiClient';
import { env } from '../../utils/env';
import { loadRazorpayCheckout } from '../../utils/razorpay';

const PLAN_CONFIG = {
  pro: {
    title: 'BelForce Pro',
    amount: '599',
    displayAmount: '₹599.00',
  },
  promax: {
    title: 'BelForce Pro Max',
    amount: '999',
    displayAmount: '₹999.00',
  },
  dummy_plan: {
    title: 'Dummy Plan (Test)',
    amount: '1',
    displayAmount: '₹1.00',
  },
};

const PAYMENT_OPTIONS = [
  {
    id: 'upi',
    label: 'UPI ID',
    subtext: 'Google Pay, PhonePe, Paytm, BHIM',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    id: 'netbanking',
    label: 'Net Banking',
    subtext: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 'debit',
    label: 'Debit Card',
    subtext: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    id: 'credit',
    label: 'Credit Card',
    subtext: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
];

function SecurePayment() {
  const [searchParams] = useSearchParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const plan = searchParams.get('plan') || 'pro';
  const config = PLAN_CONFIG[plan] || PLAN_CONFIG.pro;
  const enterDetailsHref = `/membership-plans/enter-details?plan=${plan}`;
  const [verifyingPayment, setVerifyingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState('');

  const handlePay = async () => {
    if (verifyingPayment) return;
    setPaymentError('');
    if (!state?.registrationId) {
      navigate(enterDetailsHref);
      return;
    }

    try {
      const order = await apiFetch('/payments/razorpay/order', {
        method: 'POST',
        body: JSON.stringify({ registrationId: state.registrationId }),
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
          name: state?.fullName || order.name,
          email: order.email,
          contact: order.contact,
        },
        handler: async (response) => {
          setVerifyingPayment(true);
          try {
            await apiFetch('/payments/razorpay/verify', {
              method: 'POST',
              body: JSON.stringify({
                registrationId: state.registrationId,
                ...response,
              }),
            });

            navigate(`/membership-plans/payment-success?plan=${plan}`, {
              state: {
                fullName: state?.fullName || order.name || 'Member',
                membershipId: state?.membershipId || order.membershipId,
                email: order.email,
                phone: order.contact,
                amountInr: Number(order.amount) / 100,
                currency: order.currency,
                razorpayOrderId: response?.razorpay_order_id || order.orderId,
                razorpayPaymentId: response?.razorpay_payment_id,
              },
            });
          } catch (err) {
            setPaymentError(err?.message || 'Payment verification failed. Please try again.');
          } finally {
            setVerifyingPayment(false);
          }
        },
        modal: {
          ondismiss: () => {
            setPaymentError('Payment cancelled. You can try again.');
          },
        },
        theme: { color: '#111827' },
      });

      rz.open();
    } catch (err) {
      setPaymentError(err?.message || 'Failed to start payment. Please try again.');
    }
  };

  return (
    <div className="secure-payment">
      {verifyingPayment && (
        <div className="bf-loading-overlay" role="status" aria-live="polite" aria-label="Verifying payment">
          <div className="bf-loading-card">
            <div className="bf-spinner" aria-hidden />
            <div className="bf-loading-title">Processing payment…</div>
            <div className="bf-loading-subtitle">Please don’t close or refresh this page.</div>
          </div>
        </div>
      )}
      <nav className="secure-payment__nav">
        <Link to={enterDetailsHref} className="secure-payment__back" aria-label="Go back">
          ‹
        </Link>
        <h1 className="secure-payment__nav-title">Secure Payment</h1>
      </nav>

      <div className="secure-payment__content">
        <div className="secure-payment__summary-card">
          <h2 className="secure-payment__summary-heading">Amount Summary</h2>
          <div className="secure-payment__summary-row">
            <span>Membership</span>
            <span>{config.title}</span>
          </div>
          <div className="secure-payment__summary-row">
            <span>Amount</span>
            <span>{config.displayAmount}</span>
          </div>
          <div className="secure-payment__summary-row">
            <span>Taxes</span>
            <span>Included</span>
          </div>
          <hr className="secure-payment__summary-divider" />
          <div className="secure-payment__summary-row secure-payment__summary-row--total">
            <span>Total Payable</span>
            <span>{config.displayAmount}</span>
          </div>
        </div>

        <h3 className="secure-payment__pay-heading">Pay Using</h3>
        <div className="secure-payment__options">
          {PAYMENT_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className="secure-payment__option"
              onClick={() => {}}
            >
              <span className="secure-payment__option-icon">{opt.icon}</span>
              <span className="secure-payment__option-content">
                <span className="secure-payment__option-label">{opt.label}</span>
                {opt.subtext && (
                  <span className="secure-payment__option-subtext">{opt.subtext}</span>
                )}
              </span>
              <span className="secure-payment__option-arrow" aria-hidden>
                ›
              </span>
            </button>
          ))}
        </div>

        <p className="secure-payment__razorpay">
          <span className="secure-payment__padlock" aria-hidden>
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
            </svg>
          </span>
          Secure payments powered by Razorpay
        </p>
        <p className="secure-payment__safe">Your data is encrypted and safe</p>

        {paymentError ? <div className="secure-payment__error">{paymentError}</div> : null}
        <button type="button" className="secure-payment__pay-btn" onClick={handlePay} disabled={verifyingPayment}>
          {verifyingPayment ? 'Processing…' : `Pay ${config.displayAmount} Securely`}
        </button>
      </div>

      <p className="secure-payment__copyright">copyright 2026 - BelForce</p>
    </div>
  );
}

export default SecurePayment;
