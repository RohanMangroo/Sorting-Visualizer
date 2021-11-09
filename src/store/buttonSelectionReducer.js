// Type constants
const UPDATE_BUTTON_SELECTION = 'UPDATE_BUTTON_SELECTION';
const UPDATE_ACTIVE = 'UPDATE_ACTIVE';

// Action creators
export const updateButtonSelection = (button) => {
  return {
    type: UPDATE_BUTTON_SELECTION,
    payload: {
      button,
    },
  };
};

export const updateActive = (boolean) => {
  return {
    type: UPDATE_ACTIVE,
    payload: {
      boolean,
    },
  };
};

const initialState = {
  buttonSelection: null,
  active: false,
};

const buttonSelectionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_BUTTON_SELECTION:
      return {
        ...state,
        buttonSelection: payload.button,
      };
    case UPDATE_ACTIVE:
      return { ...state, active: payload.boolean };
    default:
      return state;
  }
};

export default buttonSelectionReducer;
