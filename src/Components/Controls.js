import React from 'react';
import { connect } from 'react-redux';
import { updateButtonSelection } from '../store/buttonSelectionReducer';
import { updateBarCount } from '../store/barsReducer';

function Controls({ updateButton, selectedButton, updateBars, barCount }) {
  function handleButtonClick(e) {
    updateButton(e.target.value);
  }

  function handleBarSlider(name) {
    updateBars(name.target.value);
  }
  return (
    <div className="controls-container">
      <div className="algo-buttons-container">
        <div className="algo-buttons" onClick={(e) => handleButtonClick(e)}>
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
          defaultValue="100"
          min="5"
          max="200"
          step="1"
          className="slider"
          onChange={(name) => handleBarSlider(name)}
        />
        <input
          type="range"
          name="speed"
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

const mapStateToProps = ({ buttonSelection, bars }) => {
  return {
    selectedButton: buttonSelection.buttonSelection,
    barCount: bars.barCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateButton: (button) => {
      return dispatch(updateButtonSelection(button));
    },
    updateBars: (value) => {
      return dispatch(updateBarCount(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
