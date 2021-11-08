import React from 'react';
import { connect } from 'react-redux';
import bubbleSort from '../Algorithms/bubbleSort';

function Controls({ nums, bars }) {
  return (
    <div className="controls-container">
      <div className="algo-buttons-container">
        <div className="algo-buttons">
          <button className="active-btn" onClick={() => bubbleSort(nums, bars)}>
            BUBBLE
          </button>
          <button>SELECTION</button>
          <button>INSERTION</button>
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

const mapStateToProps = (state) => {
  return {
    nums: state.nums,
    bars: state.bars,
  };
};

export default connect(mapStateToProps, null)(Controls);
