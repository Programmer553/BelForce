import { Link } from 'react-router-dom';

const CATEGORIES = [
  { id: 'accessories', icon: 'headphones', label: 'Accessories' },
  { id: 'tablets', icon: 'tablet', label: 'Tablets & iPads' },
  { id: 'computers', icon: 'laptop', label: 'Computers & PCs' },
  { id: 'tvs', icon: 'tv', label: 'TVs & Monitors' },
  { id: 'gaming', icon: 'controller', label: 'Gaming Consoles' },
  { id: 'cameras', icon: 'camera', label: 'Cameras & Photography Gear' },
  { id: 'audio', icon: 'speaker', label: 'Audio Equipment' },
  { id: 'home', icon: 'home', label: 'Home Electronics & Appliances' },
];

const IconSvg = ({ type }) => {
  const size = 28;
  const commonProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };
  switch (type) {
    case 'headphones':
      return (
        <svg {...commonProps}>
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      );
    case 'tablet':
      return (
        <svg {...commonProps}>
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    case 'laptop':
      return (
        <svg {...commonProps}>
          <rect x="2" y="4" width="20" height="14" rx="2" ry="2" />
          <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
      );
    case 'tv':
      return (
        <svg {...commonProps}>
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
          <polyline points="17 2 12 7 7 2" />
        </svg>
      );
    case 'controller':
      return (
        <svg {...commonProps}>
          <path d="M6 12h4M8 10v4M15 13h.01M18 11h.01M17 16H7a2 2 0 01-2-2v-4a2 2 0 012-2h10a2 2 0 012 2v4a2 2 0 01-2 2z" />
        </svg>
      );
    case 'camera':
      return (
        <svg {...commonProps}>
          <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      );
    case 'speaker':
      return (
        <svg {...commonProps}>
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" />
        </svg>
      );
    case 'home':
      return (
        <svg {...commonProps}>
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    default:
      return null;
  }
};

function MoreCategoriesComingSection() {
  return (
    <section className="more-categories-coming">
      <div className="more-categories-coming__inner">
      <div className="more-categories-coming__banner">
        More categories coming soon to the app
      </div>
      <div className="more-categories-coming__grid">
        {CATEGORIES.map((cat) => (
          <button key={cat.id} type="button" className="more-categories-coming__btn">
            <span className="more-categories-coming__icon">
              <IconSvg type={cat.icon} />
            </span>
            <span className="more-categories-coming__label">{cat.label}</span>
          </button>
        ))}
      </div>
      <p className="more-categories-coming__tagline">#BelForce is more than phones.</p>
      <Link
        to="/membership-plans/choose-plan?plan=promax"
        className="more-categories-coming__cta"
      >
        Sell up to 20 items effortlessly and maximize your value - exclusively on BelForce
      </Link>
      </div>
    </section>
  );
}

export default MoreCategoriesComingSection;
