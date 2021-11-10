// Type constants
const UPDATE_ALGO_BUTTON_SELECTION = 'UPDATE_ALGO_BUTTON_SELECTION';

// Action creators
export const updateAlgoButtonSelection = (button) => {
  return {
    type: UPDATE_ALGO_BUTTON_SELECTION,
    payload: {
      button,
    },
  };
};

const initialState = {
  buttonSelection: 'bubbleSort',
};

const buttonSelectionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_ALGO_BUTTON_SELECTION:
      return {
        ...state,
        buttonSelection: payload.button,
      };
    default:
      return state;
  }
};

export default buttonSelectionReducer;
