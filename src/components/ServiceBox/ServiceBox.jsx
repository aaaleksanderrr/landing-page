import "./ServiceBox.css";
import { offers } from "../../data/data";

const ServiceBox = () => {
  const servicesList = offers.map((service) => {
    return (
      <div class="service flex-column text-normal" key={service.id}>
        {service.name}
        {service.new ? (
          <>
            <span class="text-small"> (nowość) </span> <div class="ellipse"></div>
          </>
        ) : (
          <></>
        )}
      </div>
    );
  });

  return <>{servicesList}</>;
};

export default ServiceBox;
