import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startSelectedAlgo } from '../utils';
// import { updateNums } from '../store/barsReducer';

//================================================================================================================//
function StartButton({ nums, bars, speed, selectedButton, initialHeights }) {
  //Local state used to determine which button(START or STOP is being shown)
  const [button, setButton] = useState({
    btnName: 'START',
    btnType: 'start-btn',
  });

  //When the button is clicked...
  function handleClick() {
    if (button.btnName === 'START') {
      showButton(setButton, 'STOP', 'stop-btn');
      //Passing these props to a util function to start the chosen algorithm
      startSelectedAlgo(selectedButton, nums, bars, speed, initialHeights);
    } else {
      showButton(setButton, 'START', 'start-btn');
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
    initialHeights: bars.initialHeights,
    speed: bars.speed,
    selectedButton: buttonSelection.buttonSelection,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateNums_: (nums) => {
//       return dispatch(updateNums(nums));
//     },
//   };
// };

export default connect(mapStateToProps, null)(StartButton);

//================================================================================================================//

//Small function to show the START/STOP button
function showButton(func, name, type) {
  return func({
    btnName: name,
    btnType: type,
  });
}
