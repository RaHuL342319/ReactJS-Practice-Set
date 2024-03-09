import React from "react";
import "./App.css";
import CertificateApprover from "./components/CertificateApprover";

const studentData = [
  {
    id: 1,
    name: "Nitin",
    marks: 78,
  },
  {
    id: 2,
    name: "Mehak",
    marks: 95,
  },
  {
    id: 3,
    name: "Mehul",
    marks: 65,
  },
  {
    id: 4,
    name: "Nina",
    marks: 56,
  },
];

function App() {
  return (
    <>
      <CertificateApprover studentData={studentData} />
    </>
  );
}

export default App;
