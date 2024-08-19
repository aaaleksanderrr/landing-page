import SpecialistBox from "../SpecialistBox/SpecialistBox";
import "./SpecialistContainer.css";

const SpecialistContainer = () => {
  return (
    <div className="specialist-container">
      <section
        className="specialists-section section-default-width flex-column padding-small"
        id="about"
      >
        <h2 className="specialist-title text-bold margin-left-small">Nasi specjaliści</h2>

        <SpecialistBox />
      </section>
    </div>
  );
};

export default SpecialistContainer;
