import React from 'react';

export default function Controls() {
  return (
    <div className="controls-container">
      <div className="algo-buttons-container">
        <div className="algo-buttons">
          <button>BUBBLE</button>
          <button>SELECTION</button>
          <button className="active-btn">INSERTION</button>
          <button>QUICK</button>
          <button>MERGE</button>
          <button>HEAP</button>
        </div>
      </div>
      <div className="sliders">
        <input
          type="range"
          name="bars"
          defaultValue="200"
          min="20"
          max="400"
          step="0"
          className="slider"
        />
        <input
          type="range"
          name="bars"
          defaultValue="200"
          min="20"
          max="400"
          step="0"
          className="slider"
        />
      </div>
    </div>
  );
}
