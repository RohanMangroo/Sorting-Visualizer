import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startSelectedAlgo } from '../utils';

//================================================================================================================//
function StartButton({ nums, bars, selectedButton }) {
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
      startSelectedAlgo(selectedButton, nums, bars);
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
    selectedButton: buttonSelection.buttonSelection,
  };
};

export default connect(mapStateToProps, null)(StartButton);

//================================================================================================================//

//Small function to show the START/STOP button
function showButton(func, name, type) {
  return func({
    btnName: name,
    btnType: type,
  });
}
