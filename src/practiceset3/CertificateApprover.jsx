import React from "react";

const CertificateApprover = ({ studentData }) => {
  const mean =
    studentData.reduce((acc, { marks }) => {
      return (acc += marks);
    }, 0) / studentData.length;
  return (
    <div>
      <h1>
        Student Certification{" "}
        {mean > 80 ? (
          <span style={{ color: "green" }}>Approved</span>
        ) : (
          <span style={{ color: "red" }}>Not Approved</span>
        )}
      </h1>
    </div>
  );
};

export default CertificateApprover;
