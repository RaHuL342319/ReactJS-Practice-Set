import React from "react";

const StudentDetails = ({ name, english, maths, computers }) => {
  const totalMarks = english + maths + computers;
  // console.log(name);
  return (
    <div>
      <h1>Student Details:</h1>
      <h3>Name: {name}</h3>
      <h3>English: {english}</h3>
      <h3>Maths: {maths}</h3>
      <h3>Computers: {computers}</h3>
      <h3>Total Marks: {totalMarks}</h3>
      <h3>
        Grade:
        {totalMarks >= 225
          ? "A"
          : totalMarks >= 180
          ? "B"
          : totalMarks >= 150
          ? "C"
          : "D"}
      </h3>
    </div>
  );
};

export default StudentDetails;
