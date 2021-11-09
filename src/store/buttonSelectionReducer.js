// Type constants
const UPDATE_BUTTON_SELECTION = 'UPDATE_BUTTON_SELECTION';

// Action creators
export const updateButtonSelection = (button) => {
  return {
    type: UPDATE_BUTTON_SELECTION,
    payload: {
      button,
    },
  };
};

const initialState = {
  buttonSelection: null,
};

const buttonSelectionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_BUTTON_SELECTION:
      return {
        buttonSelection: payload.button,
      };
    default:
      return state;
  }
};

export default buttonSelectionReducer;
