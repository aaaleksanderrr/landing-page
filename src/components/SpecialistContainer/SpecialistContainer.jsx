import SpecialistBox from "../SpecialistBox/SpecialistBox";
import "./SpecialistContainer.css";

const SpecialistContainer = () => {
  return (
    <div class="specialist-container">
      <div class="specialists-section section-default-width flex-column padding-small" id="about">
        <p class="specialist-title text-bold">Nasi specjaliści</p>

        <SpecialistBox />
      </div>
    </div>
  );
};

export default SpecialistContainer;
