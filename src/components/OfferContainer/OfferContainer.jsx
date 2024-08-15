import ServiceBox from "../ServiceBox/ServiceBox";
import "./OfferContainer.css";

const OfferContainer = () => {
  return (
    <div className="offer-container">
      <section className="offer-section section-default-width flex-column" id="offer">
        <div className="offer-title-box">
          <h2 className="offer-title text-bold">Czym zajmuje się nasza firma?</h2>
        </div>
        <div className="services-box flex-column">
          <ServiceBox />
        </div>
      </section>
    </div>
  );
};

export default OfferContainer;
