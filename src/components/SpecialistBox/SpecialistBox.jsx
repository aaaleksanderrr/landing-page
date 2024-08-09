import "./SpecialistBox.css";
import { employees } from "../../data/data.js";

const SpecialistBox = () => {
  const employeesList = employees.map((employee) => {
    return (
      <div className="specialist-box" key={employee.id}>
        <div className={`${employee.image} specialist-photo`}></div>
        <div className="specialist-info-box">
          <span className="specialist-name text-small text-bold">
            {employee.name} [ {employee.position} ]
          </span>
          <p className="text-small specialist-text">{employee.description}</p>
        </div>
      </div>
    );
  });

  return <>{employeesList}</>;
};

export default SpecialistBox;
