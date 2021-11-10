import React from 'react';
import { connect } from 'react-redux';
import { updateAlgoButtonSelection } from '../store/buttonSelectionReducer';
import { updateBarCount } from '../store/barsReducer';

//================================================================================================================//
function Controls({
  updateAlgoButtonSelection_,
  updateBarCount_,
  selectedButton,
}) {
  //This handle click function uses event delegation to update which algorithm button has been clicked. The value passed is a string of the algorithm name
  function handleButtonClick(e) {
    updateAlgoButtonSelection_(e.target.value);
  }

  //This handle change function takes the value of the slider and updates the barCount
  function handleBarSlider(name) {
    updateBarCount_(name.target.value);
  }
  //================================================================================================================//
  //When an algorithm button is clicked this component will re-render with the color blue. This is based on the 'selectedButton' variable(which is a part of Redux state)
  //Maybe I could find a way so the whole component doesn't re-render and just the current button and previous buttons are affected???
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
//================================================================================================================//
const mapStateToProps = ({ buttonSelection, bars }) => {
  return {
    selectedButton: buttonSelection.buttonSelection,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAlgoButtonSelection_: (button) => {
      return dispatch(updateAlgoButtonSelection(button));
    },
    updateBarCount_: (value) => {
      return dispatch(updateBarCount(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
