import React, { useState } from 'react';

const ColorfulDivs = () => {
  const [activeDiv, setActiveDiv] = useState(null);

  const handleDivClick = (divIndex) => {
    
    setActiveDiv(divIndex);
  };

  
  return (
    <div>
      <div
        className={`box ${activeDiv === 1 ? 'active' : ''}`}
        style = {{ border:"1px solid",height:"200px" }}
        onClick={() => handleDivClick(1)}
      ></div>
      <div
        className={`box ${activeDiv === 2 ? 'active' : ''}`}
        
        onClick={() => handleDivClick(2)}
      ></div>
      <div
        className={`box ${activeDiv === 3 ? 'active' : ''}`}
        onClick={() => handleDivClick(3)}
      ></div>
      <div
        className={`box ${activeDiv === 4 ? 'active' : ''}`}
        onClick={() => handleDivClick(4)}
      ></div>
    </div>
  );
};

export default ColorfulDivs;
