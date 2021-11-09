import React from 'react';
import { connect } from 'react-redux';
import { updateButtonSelection } from '../store/buttonSelectionReducer';

function Controls({ update }) {
  function handleClick(e) {
    update(e.target.value);
  }

  return (
    <div className="controls-container">
      <div className="algo-buttons-container">
        <div className="algo-buttons" onClick={(e) => handleClick(e)}>
          <button value="bubbleSort">BUBBLE</button>
          <button value="selectionSort">SELECTION</button>
          <button value="insertionSort">INSERTION</button>
          <button value="quickSort">QUICK</button>
          <button value="mergeSort">MERGE</button>
          <button value="heapSort">HEAP</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    update: (button) => {
      return dispatch(updateButtonSelection(button));
    },
  };
};

export default connect(null, mapDispatchToProps)(Controls);
