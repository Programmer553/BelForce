import freePickupImg from '../../assets/images/free_pickup.webp';
import fasterSalesImg from '../../assets/images/faster_sales.webp';
import simpleProcessImg from '../../assets/images/simple_process.webp';

const FEATURES = [
  { label: 'Free PICKUP', image: freePickupImg },
  { label: 'Faster sales', image: fasterSalesImg },
  { label: 'Simple Process', image: simpleProcessImg },
];

function PrepaidEnjoySection() {
  return (
    <section className="prepaid-enjoy">
      <div className="prepaid-enjoy__inner">
        <p className="prepaid-enjoy__heading">With our pre-paid Subsription enjoy soon.</p>
        <div className="prepaid-enjoy__banner">
          {FEATURES.map((item) => (
            <div key={item.label} className="prepaid-enjoy__card">
              <div className="prepaid-enjoy__card-img-wrap">
                <img src={item.image} alt="" className="prepaid-enjoy__card-img" loading="lazy" decoding="async" />
              </div>
              <span className="prepaid-enjoy__card-label">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="prepaid-enjoy__why">
          <div className="prepaid-enjoy__why-header">
            <div>
              <h3 className="prepaid-enjoy__why-title">Why BelForce?</h3>
              <p className="prepaid-enjoy__why-sub">See how much you save compared to traditional classifieds.</p>
            </div>
            <div className="prepaid-enjoy__why-save">
              <span className="prepaid-enjoy__why-save-icon" aria-hidden>↑</span>
              <span className="prepaid-enjoy__why-save-text">Save ₹5,200/mo</span>
            </div>
          </div>
          <div className="prepaid-enjoy__compare">
            <div className="prepaid-enjoy__compare-row">
              <span className="prepaid-enjoy__compare-label">TRADITIONAL ADS (20 LISTINGS)</span>
              <span className="prepaid-enjoy__compare-value">₹6,800</span>
            </div>
            <div className="prepaid-enjoy__compare-bar-wrap">
              <div className="prepaid-enjoy__compare-bar prepaid-enjoy__compare-bar--grey" style={{ width: '66%' }} />
            </div>
            <p className="prepaid-enjoy__compare-note prepaid-enjoy__compare-note--traditional">*Based on average listing fees WITH no results</p>
          </div>
          <div className="prepaid-enjoy__compare">
            <div className="prepaid-enjoy__compare-row">
              <span className="prepaid-enjoy__compare-label prepaid-enjoy__compare-label--belforce">BELFORCE MEMBERSHIP</span>
              <span className="prepaid-enjoy__compare-value">₹999</span>
            </div>
            <div className="prepaid-enjoy__compare-bar-wrap">
              <div className="prepaid-enjoy__compare-bar prepaid-enjoy__compare-bar--blue" style={{ width: '18%' }} />
            </div>
            <p className="prepaid-enjoy__compare-note prepaid-enjoy__compare-note--belforce">handles everything, you just need to list and get money 3-5 days</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrepaidEnjoySection;
