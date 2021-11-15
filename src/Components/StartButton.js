import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startSelectedAlgo } from '../utils';
import { updateActive } from '../store/buttonSelectionReducer';
import { updateBarCount } from '../store/barsReducer';

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
      startSelectedAlgo(selctdBtn, nums, bars, spd, initHths, setButton);
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
