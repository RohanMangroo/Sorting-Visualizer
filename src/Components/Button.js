import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateActive } from '../store/buttonSelectionReducer';
import bubbleSort from '../Algorithms/bubbleSort';

function Button(props) {
  const [button, setButton] = useState({
    btnName: 'START',
    btnType: 'start-btn',
    btnContainer: 'start-btn-container',
  });
  //

  function handleClick() {
    const { update, active, nums, bars } = props;

    //Inactive means the button says 'START', and needs to be pressed to be active
    if (!active) {
      setButton({
        btnName: 'STOP',
        btnType: 'stop-btn',
        btnContainer: 'stop-btn-container',
      });
      bubbleSort(nums, bars);
      update(true);
      //Active means the button says 'STOP'
    } else {
      setButton({
        btnName: 'START',
        btnType: 'start-btn',
        btnContainer: 'start-btn-container',
      });
      window.location.reload();
      update(false);
    }
  }

  return (
    <div className={`${button.btnContainer} btn-container`}>
      <button className={`btn ${button.btnType}`} onClick={() => handleClick()}>
        {button.btnName}
      </button>
    </div>
  );
}

const mapStateToProps = ({ bars, buttonSelection }) => {
  return {
    nums: bars.nums,
    bars: bars.displayBars,
    selectedButton: buttonSelection.buttonSelection,
    active: buttonSelection.active,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    update: (boolean) => {
      return dispatch(updateActive(boolean));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
