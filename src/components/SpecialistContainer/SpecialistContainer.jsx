import SpecialistBox from "../SpecialistBox/SpecialistBox";
import "./SpecialistContainer.css";

const SpecialistContainer = () => {
  return (
    <div className="specialist-container">
      <div
        className="specialists-section section-default-width flex-column padding-small"
        id="about"
      >
        <p className="specialist-title text-bold">Nasi specjaliści</p>

        <SpecialistBox />
      </div>
    </div>
  );
};

export default SpecialistContainer;
