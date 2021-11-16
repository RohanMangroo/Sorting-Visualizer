import React from 'react';
import { connect } from 'react-redux';
import { updateAlgoButtonSelection } from '../store/buttonSelectionReducer';
import { updateBarCount, updateSpeed } from '../store/barsReducer';

//================================================================================================================//
function Controls({
  updateAlgoButtonSelection_,
  updateBarCount_,
  updateSpeed_,
  selectedButton,
  active,
  barCount,
}) {
  //This handle click function uses event delegation to update which algorithm button has been clicked. The value passed is a string of the algorithm name
  function handleButtonClick(e) {
    updateAlgoButtonSelection_(e.target.value);
  }

  //This handle change function takes the value of the slider and updates the barCount
  function handleBarSlider(name) {
    updateBarCount_(name.target.value);
  }

  //This handle change function takes the value of the slider and updates the speed
  function handleSpeed(name) {
    updateSpeed_(name.target.value);
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
            disabled={active ? true : false}
            className={getClassName(selectedButton, 'bubbleSort', active)}
          >
            BUBBLE
          </button>
          <button
            value="selectionSort"
            disabled={active ? true : false}
            className={getClassName(selectedButton, 'selectionSort', active)}
          >
            SELECTION
          </button>
          <button
            value="insertionSort"
            disabled={active ? true : false}
            className={getClassName(selectedButton, 'insertionSort', active)}
          >
            INSERTION
          </button>
          <button
            value="quickSort"
            disabled={active ? true : false}
            className={getClassName(selectedButton, 'quickSort', active)}
          >
            QUICK
          </button>
          <button
            value="mergeSort"
            disabled={active ? true : false}
            className={getClassName(selectedButton, 'mergeSort', active)}
          >
            MERGE
          </button>
          <button
            value="heapSort"
            disabled={active ? true : false}
            className={getClassName(selectedButton, 'heapSort', active)}
          >
            HEAP
          </button>
        </div>
      </div>
      <div className="sliders">
        <input
          type="range"
          name="bars"
          disabled={active ? true : false}
          value={barCount}
          min="5"
          max="400"
          step="1"
          className="slider"
          onChange={(name) => handleBarSlider(name)}
        />
        <input
          type="range"
          name="speed"
          disabled={active ? true : false}
          defaultValue="100"
          min="20"
          max="300"
          step="1"
          className="slider"
          onChange={(name) => handleSpeed(name)}
        />
      </div>
    </div>
  );
}
//================================================================================================================//
const mapStateToProps = ({ buttonSelection, bars }) => {
  return {
    selectedButton: buttonSelection.buttonSelection,
    active: buttonSelection.active,
    barCount: bars.barCount,
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
    updateSpeed_: (value) => {
      return dispatch(updateSpeed(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);

function getClassName(selectedButton, buttonName, active) {
  const className =
    selectedButton === buttonName
      ? 'algo-btn active-btn'
      : active
      ? 'algo-btn disable-btn'
      : 'algo-btn algo-green';
  return className;
}
