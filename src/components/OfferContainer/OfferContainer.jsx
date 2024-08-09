import ServiceBox from "../ServiceBox/ServiceBox";
import "./OfferContainer.css";

const OfferContainer = () => {
  return (
    <div className="offer-container">
      <div className="offer-section section-default-width flex-column" id="offer">
        <div className="offer-title-box">
          <span className="offer-title text-bold">Czym zajmuje się nasza firma?</span>
        </div>
        <div className="services-box flex-column">
          <ServiceBox />
        </div>
      </div>
    </div>
  );
};

export default OfferContainer;
