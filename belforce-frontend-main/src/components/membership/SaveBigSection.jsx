import { Link } from 'react-router-dom';

function SaveBigSection() {
  return (
    <section className="save-big-section">
      <div className="save-big-section__inner">
        <div className="save-big-section__row">
          <div className="save-big-section__icon" aria-hidden>
            %
          </div>
          <div className="save-big-section__text-wrap">
            <p className="save-big-section__heading">
              SAVE BIG. Re-sell effortlessly. Only
              <br />
              with BelForce.
            </p>
          </div>
        </div>
        <Link to="/membership-plans/choose-plan?plan=promax" className="save-big-section__btn">
          Pre-order subsription now
        </Link>
      </div>
    </section>
  );
}

export default SaveBigSection;
