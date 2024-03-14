import React, { useState } from "react";

const About = ({ heading, name, learning }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div>
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        Know More
      </button>
      {showContent && <p>{learning}</p>}
    </div>
  );
};

export default About;
