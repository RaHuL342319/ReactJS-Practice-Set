import React from "react";

const EmployeeDetails = ({ employees }) => {
  const totalSalary = employees.reduce((acc, { salary }) => {
    return (acc += salary);
  }, 0);
  return (
    <div>
      <h1>Employee Details:</h1>
      <ul>
        {employees.map(({ name, level, dept, designation, salary }) => (
          <li
            style={{
              background: level === 2 ? "orange" : "",
              border: designation === "President" ? "1px solid green" : "",
            }}
          >
            <h3>
              name: {name}, Level:{level}, Dept: {dept}, designation:
              {designation}, salary:{salary}
            </h3>
          </li>
        ))}
      </ul>
      <h2>Total Salary Expense: {totalSalary}</h2>
    </div>
  );
};
export default EmployeeDetails;
