import React from 'react';
import { connect } from 'react-redux';
import { updateAlgoButtonSelection } from '../store/buttonSelectionReducer';
import { updateBarCount, updateSpeed } from '../store/barsReducer';
import { getClassName } from '../utils';

//================================================================================================================//
function Controls({ bars, buttonSelection, updates }) {
  //This handle click function uses event delegation to update which algorithm button has been clicked. The value passed is a string of the algorithm name
  function handleButtonClick(e) {
    if (e.target.value) {
      updates.updateAlgoButtonSelection_(e.target.value);
    }
  }

  //This handle change function takes the value of the slider and updates the barCount
  function handleBarSlider(name) {
    updates.updateBarCount_(name.target.value);
  }

  //This handle change function takes the value of the slider and updates the speed
  function handleSpeed(name) {
    updates.updateSpeed_(name.target.value);
  }

  //================================================================================================================//
  const { mainButton, algoName } = buttonSelection;
  const { barCount, speed } = bars;
  //When an algorithm button is clicked the button will re-render with the color blue. This is based on the 'selectedButton' variable(which is a part of Redux state)
  return (
    <div className="controls-container">
      <div className="algo-buttons-container">
        <div className="algo-buttons" onClick={(e) => handleButtonClick(e)}>
          <button
            value="bubbleSort"
            disabled={mainButton !== 'START' ? true : false}
            className={getClassName(algoName, 'bubbleSort', mainButton)}
          >
            BUBBLE
          </button>
          <button
            value="selectionSort"
            disabled={mainButton !== 'START' ? true : false}
            className={getClassName(algoName, 'selectionSort', mainButton)}
          >
            SELECTION
          </button>
          <button
            value="insertionSort"
            disabled={mainButton !== 'START' ? true : false}
            className={getClassName(algoName, 'insertionSort', mainButton)}
          >
            INSERTION
          </button>
          <button
            value="quickSort"
            disabled={mainButton !== 'START' ? true : false}
            className={getClassName(algoName, 'quickSort', mainButton)}
          >
            QUICK
          </button>
          <button
            value="mergeSort"
            disabled={mainButton !== 'START' ? true : false}
            className={getClassName(algoName, 'mergeSort', mainButton)}
          >
            MERGE
          </button>
          <button
            value="heapSort"
            disabled={mainButton !== 'START' ? true : false}
            className={getClassName(algoName, 'heapSort', mainButton)}
          >
            HEAP
          </button>
        </div>
      </div>
      <div className="sliders-container">
        <div className="sliders bar-slider">
          <div>
            <label>Bars</label>
            <span>{barCount}</span>
          </div>
          <input
            type="range"
            name="bars"
            disabled={mainButton !== 'START' ? true : false}
            value={barCount}
            min="5"
            max="400"
            step="5"
            className="slider"
            onChange={(name) => handleBarSlider(name)}
          />
        </div>
        <div className="sliders">
          <div>
            <label>Speed</label>
            <span>{speed}</span>
          </div>
          <input
            type="range"
            name="speed"
            disabled={mainButton !== 'START' ? true : false}
            defaultValue="100"
            min="0"
            max="2000"
            step="5"
            className="slider speed-slider"
            onChange={(name) => handleSpeed(name)}
          />
        </div>
      </div>
    </div>
  );
}
//================================================================================================================//
const mapStateToProps = ({ buttonSelection, bars }) => {
  return {
    bars,
    buttonSelection,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updates: {
      updateAlgoButtonSelection_: (button) => {
        return dispatch(updateAlgoButtonSelection(button));
      },
      updateBarCount_: (value) => {
        return dispatch(updateBarCount(value));
      },
      updateSpeed_: (value) => {
        return dispatch(updateSpeed(value));
      },
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
