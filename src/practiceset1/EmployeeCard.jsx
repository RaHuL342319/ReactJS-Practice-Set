import React from "react";

const EmployeeCard = ({ name, designation, workExperience }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <h2>Employee Details:</h2>
      <h5>Name: {name}</h5>
      <h6 style={{ color: "green" }}> Designation: {designation}</h6>
      <h6 style={{ color: "blue" }}>Work Experience: {workExperience}</h6>
    </div>
  );
};

export default EmployeeCard;
