import { useState } from "react";

function ColorPicker({ colors }) {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="color-picker">
      {Object.entries(colors).map(([colorName, colorCode]) => (
        <button
          key={colorName}
          style={{
            backgroundColor: colorCode,
            width: "100px",
            padding: "10px",
            margin: "10px",
          }}
          onClick={() => handleClick(colorCode)}
        >
          {colorName}
        </button>
      ))}
      {selectedColor && <p>HEX code: {selectedColor}</p>}
    </div>
  );
}
export default ColorPicker;
