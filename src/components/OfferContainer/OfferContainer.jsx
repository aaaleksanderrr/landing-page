import ServiceBox from "../ServiceBox/ServiceBox";
import "./OfferContainer.css";

const OfferContainer = () => {
  return (
    <div class="offer-container">
      <div class="offer-section section-default-width flex-column" id="offer">
        <div class="offer-title-box">
          <span class="offer-title text-bold">Czym zajmuje się nasza firma?</span>
        </div>
        <div class="services-box flex-column">
          <ServiceBox />
        </div>
      </div>
    </div>
  );
};

export default OfferContainer;
