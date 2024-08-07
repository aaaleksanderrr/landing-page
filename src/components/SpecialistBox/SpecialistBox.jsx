import "./SpecialistBox.css";

const SpecialistBox = () => {
  return (
    <>
      <div class="specialist-box">
        <div class="philip specialist-photo"></div>
        <div class="specialist-info-box">
          <span class="specialist-name text-small text-bold">
            Philip K. Dick [ dział obsługi klienta ]
          </span>
          <p class="text-small specialist-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus
            egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a.
            Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis
            efficitur lacinia enim, non tincidunt libero ultrices in.
          </p>
        </div>
      </div>

      <div class="specialist-box">
        <div class="ursula specialist-photo"></div>
        <div class="specialist-info-box">
          <span class="specialist-name text-small text-bold">
            Ursula Le Guin [ dział marketingu ]
          </span>
          <p class="text-small specialist-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus
            egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a.
            Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis
            efficitur lacinia enim, non tincidunt libero ultrices in.
          </p>
        </div>
      </div>
    </>
  );
};

export default SpecialistBox;
