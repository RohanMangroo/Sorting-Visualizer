// Type constants
const UPDATE_ALGO_BUTTON_SELECTION = 'UPDATE_ALGO_BUTTON_SELECTION';
const UPDATE_MAIN_BUTTON = 'UPDATE_MAIN_BUTTON';

// Action creators
export const updateAlgoButtonSelection = (button) => {
  return {
    type: UPDATE_ALGO_BUTTON_SELECTION,
    payload: {
      button,
    },
  };
};

export const updateMainButton = (name) => {
  return {
    type: UPDATE_MAIN_BUTTON,
    payload: {
      name,
    },
  };
};

const initialState = {
  algoName: 'bubbleSort',
  mainButton: 'START',
};

const buttonSelectionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_ALGO_BUTTON_SELECTION:
      return {
        ...state,
        algoName: payload.button,
      };
    case UPDATE_MAIN_BUTTON:
      return {
        ...state,
        mainButton: payload.name,
      };
    default:
      return state;
  }
};

export default buttonSelectionReducer;
