import { Link } from 'react-router-dom';
import seamlessSellingImg from '../../assets/images/seamless_sellling.webp';
import verifiedPurchasesImg from '../../assets/images/verified_purchases.webp';
import connectingOurImg from '../../assets/images/connecting_our.webp';
import sustainableTechImg from '../../assets/images/sustainable_tech_choice.webp';

const ITEMS = [
  {
    id: 'seamless',
    image: seamlessSellingImg,
    title: 'Seamless Selling',
  },
  {
    id: 'verified',
    image: verifiedPurchasesImg,
    title: 'Verified Purchases',
  },
  {
    id: 'connecting',
    image: connectingOurImg,
    title: 'Connecting Our top facility',
  },
  {
    id: 'sustainable',
    image: sustainableTechImg,
    title: 'Sustainable Tech Choices',
  },
];

function WhyPeopleChoose() {
  return (
    <section className="why-people-choose">
      <h2 className="why-people-choose__heading">Why People Choose BelForce</h2>
      <div className="why-people-choose__grid">
        {ITEMS.map((item) => (
          <div key={item.id} className="why-people-choose__item">
            <div className="why-people-choose__thumb">
              <img src={item.image} alt="" className="why-people-choose__img" loading="lazy" decoding="async" />
            </div>
            <div className="why-people-choose__caption">{item.title}</div>
          </div>
        ))}
      </div>
      <p className="why-people-choose__slogan">Real problems. A better solution.</p>
      <div className="why-people-choose__cta">
        <p className="why-people-choose__cta-text">Ready to get early access?</p>
        <Link to="/membership-plans" className="why-people-choose__cta-btn">
          View Membership Plans
        </Link>
      </div>
    </section>
  );
}

export default WhyPeopleChoose;
