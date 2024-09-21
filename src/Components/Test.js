import React, { useState } from "react";
 
const Test = () => {
  const [color, setColor] = useState("blue");
 
  const handleClick = () => {
    setColor(color === "blue" ? "green" : "blue");
  };
 
  return (
 
      <div style={{ backgroundColor: color }}>
        <button className="color-button" onClick={handleClick}>
          Click me to change color
        </button>
      </div>
 
  );
};
 
export default Test;