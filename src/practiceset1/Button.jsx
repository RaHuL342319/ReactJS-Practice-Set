import React from "react";

const Button = ({ backgroundColor, color, borderRadius, padding }) => {
  return (
    <button style={{ backgroundColor, color, borderRadius, padding }}>
      Start
    </button>
  );
};

export default Button;
