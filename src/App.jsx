import React from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";

const colors = { red: "#EE4B2B", blue: "#89CFF0", green: "#7FFFD4" };

function App() {
  return (
    <>
      <ColorPicker colors={colors} />
    </>
  );
}

export default App;
