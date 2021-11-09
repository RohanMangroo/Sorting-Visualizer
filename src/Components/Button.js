import React from 'react';
import { connect } from 'react-redux';
import { updateActive } from '../store/buttonSelectionReducer';
import bubbleSort from '../Algorithms/bubbleSort';

function Button(props) {
  const { type, name } = props;
  const container = `btn-container ${type}-container`;
  const btnType = `btn ${type}`;

  function handleClick() {
    const { update, active, nums, bars } = props;
    if (!active) {
      bubbleSort(nums, bars);
      update(true);
    } else {
      window.location.reload();
      update(false);
    }
  }

  return (
    <div className={container}>
      <button className={btnType} onClick={() => handleClick()}>
        {name}
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
