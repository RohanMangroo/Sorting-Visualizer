// Type constants
const UPDATE_ALGO_BUTTON_SELECTION = 'UPDATE_ALGO_BUTTON_SELECTION';
const UPDATE_ACTIVE = 'UPDATE_ACTIVE';

// Action creators
export const updateAlgoButtonSelection = (button) => {
  return {
    type: UPDATE_ALGO_BUTTON_SELECTION,
    payload: {
      button,
    },
  };
};

export const updateActive = (bool) => {
  return {
    type: UPDATE_ACTIVE,
    payload: {
      active: bool,
    },
  };
};

const initialState = {
  buttonSelection: 'bubbleSort',
  active: false,
};

const buttonSelectionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_ALGO_BUTTON_SELECTION:
      return {
        ...state,
        buttonSelection: payload.button,
      };
    case UPDATE_ACTIVE:
      return {
        ...state,
        active: payload.active,
      };
    default:
      return state;
  }
};

export default buttonSelectionReducer;
