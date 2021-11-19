import React from 'react';
import { connect } from 'react-redux';
import { startSelectedAlgo } from '../utils';
import { updateMainButton } from '../store/buttonSelectionReducer';
import { updateBarCount } from '../store/barsReducer';
import {
  updateSwaps,
  updateChecks,
  updateRecursiveSplits,
  resetMetrics,
} from '../store/metricsReducer';

//================================================================================================================//
function StartButton({ bars, buttonSelection, updates }) {
  const { mainButton } = buttonSelection;
  //This function will change the main button from 'START' to 'NEW' to 'STOP'
  function handleClick() {
    switch (mainButton) {
      case 'NEW':
        //In order to for the bars to re-render I must pass it a prop of different value, so I'm passing it the barCount+1
        updates.updateBarCount_(++bars.barCount);
        updates.updateMainButton_('START');
        updates.resetMetrics_();
        break;
      case 'START':
        updates.updateMainButton_('STOP');
        //Passing these props to a util function to start the chosen algorithm
        startSelectedAlgo(bars, buttonSelection, updates);
        break;
      default:
        window.location.reload();
        break;
    }
  }

  const btnName = buttonSelection.mainButton;
  const btnType = `${buttonSelection.mainButton.toLowerCase()}-btn`;
  //================================================================================================================//
  return (
    <div className={`${btnType}-container btn-container`}>
      <button className={`btn ${btnType}`} onClick={() => handleClick()}>
        {btnName}
      </button>
    </div>
  );
}
//================================================================================================================//
const mapStateToProps = ({ bars, buttonSelection }) => {
  return {
    bars,
    buttonSelection,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updates: {
      updateMainButton_: (name) => {
        return dispatch(updateMainButton(name));
      },
      updateBarCount_: (value) => {
        return dispatch(updateBarCount(value));
      },
      updateSwaps_: (value) => {
        return dispatch(updateSwaps(value));
      },
      updateChecks_: (value) => {
        return dispatch(updateChecks(value));
      },
      updateRecursiveSplits_: (value) => {
        return dispatch(updateRecursiveSplits(value));
      },
      resetMetrics_: () => {
        return dispatch(resetMetrics());
      },
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartButton);
