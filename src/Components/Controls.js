import React from 'react';
import { connect } from 'react-redux';
import { updateButtonSelection } from '../store/buttonSelectionReducer';

function Controls({ update, selectedButton }) {
  function handleClick(e) {
    update(e.target.value);
  }

  return (
    <div className="controls-container">
      <div className="algo-buttons-container">
        <div className="algo-buttons" onClick={(e) => handleClick(e)}>
          <button
            value="bubbleSort"
            className={selectedButton === 'bubbleSort' ? 'active-btn' : ''}
          >
            BUBBLE
          </button>
          <button
            value="selectionSort"
            className={selectedButton === 'selectionSort' ? 'active-btn' : ''}
          >
            SELECTION
          </button>
          <button
            value="insertionSort"
            className={selectedButton === 'insertionSort' ? 'active-btn' : ''}
          >
            INSERTION
          </button>
          <button
            value="quickSort"
            className={selectedButton === 'quickSort' ? 'active-btn' : ''}
          >
            QUICK
          </button>
          <button
            value="mergeSort"
            className={selectedButton === 'mergeSort' ? 'active-btn' : ''}
          >
            MERGE
          </button>
          <button
            value="heapSort"
            className={selectedButton === 'heapSort' ? 'active-btn' : ''}
          >
            HEAP
          </button>
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

const mapStateToProps = ({ buttonSelection }) => {
  return {
    selectedButton: buttonSelection.buttonSelection,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    update: (button) => {
      return dispatch(updateButtonSelection(button));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
