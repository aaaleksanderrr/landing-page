import "./ServiceBox.css";

const ServiceBox = () => {
  return (
    <>
      <div class="service flex-column text-normal">
        Usługa 1 <span class="text-small"> (nowość) </span>
        <div class="ellipse"></div>
      </div>
      <div class="service flex-column text-normal">Usługa 2</div>
      <div class="service flex-column text-normal">Usługa 3</div>
      <div class="service flex-column text-normal">Usługa 4</div>
      <div class="service flex-column text-normal">Usługa 5</div>
      <div class="service flex-column text-normal">Usługa 6</div>
    </>
  );
};

export default ServiceBox;
