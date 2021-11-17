import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startSelectedAlgo } from '../utils';
import { updateActive } from '../store/buttonSelectionReducer';
import { updateBarCount } from '../store/barsReducer';
import {
  updateSwaps,
  updateChecks,
  updateRecursiveSplit,
} from '../store/metricsReducer';

//================================================================================================================//
function StartButton({
  nums,
  bars,
  spd,
  selctdBtn,
  initHths,
  active,
  updateActive_,
  updateBarCount_,
  barCount,
  updateSwaps_,
  updateChecks_,
  updateRecursiveSplits_,
}) {
  const [button, setButton] = useState({
    btnName: 'START',
    btnType: 'start-btn',
  });

  //When the button is clicked...
  function handleClick() {
    if (active && button.btnName === 'NEW') {
      updateBarCount_(++barCount);
      setButton({
        btnName: 'START',
        btnType: 'start-btn',
      });
      updateActive_(false);
    } else if (!active) {
      setButton({
        btnName: 'STOP',
        btnType: 'stop-btn',
      });

      updateActive_(true);
      //Passing these props to a util function to start the chosen algorithm
      startSelectedAlgo(
        selctdBtn,
        nums,
        bars,
        spd,
        initHths,
        setButton,
        updateSwaps_,
        updateChecks_,
        updateRecursiveSplits_
      );
    } else {
      setButton({
        btnName: 'START',
        btnType: 'start-btn',
      });
      updateActive_(false);
      //Maybe a better option for stoping???
      window.location.reload();
    }
  }
  //================================================================================================================//
  return (
    <div className={`${button.btnType}-container btn-container`}>
      <button className={`btn ${button.btnType}`} onClick={() => handleClick()}>
        {button.btnName}
      </button>
    </div>
  );
}
//================================================================================================================//
const mapStateToProps = ({ bars, buttonSelection }) => {
  return {
    nums: bars.nums,
    bars: bars.displayBars,
    barCount: bars.barCount,
    initHths: bars.initialHeights,
    spd: bars.speed,
    selctdBtn: buttonSelection.buttonSelection,
    active: buttonSelection.active,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateActive_: (bool) => {
      return dispatch(updateActive(bool));
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
      return dispatch(updateRecursiveSplit(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartButton);

//================================================================================================================//

//Small function to show the START/STOP button
// export function showButton(func, name, type) {
//   return func({
//     btnName: name,
//     btnType: type,
//   });
// }
