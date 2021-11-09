import React from 'react';
import { connect } from 'react-redux';
import { updateActive } from '../store/buttonSelectionReducer';

function Button({ name, type, update, selectedButton, active }) {
  const container = `btn-container ${type}-container`;
  const btnType = `btn ${type}`;

  function handleClick() {
    active ? update(false) : update(true);
    console.log(active);
  }

  return (
    <div className={container}>
      <button className={btnType} onClick={() => handleClick()}>
        {name}
      </button>
    </div>
  );
}

const mapStateToProps = ({ buttonSelection }) => {
  return {
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
