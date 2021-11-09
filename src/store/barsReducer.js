import { createStore } from 'redux';

// Type constants
const UPDATE_BARS = 'UPDATE_BARS';

// Action creators
export const updateBars = (nums, displayBars, initialHeights) => {
  return {
    type: UPDATE_BARS,
    payload: {
      nums,
      displayBars,
      initialHeights,
    },
  };
};

const initialState = {
  nums: [],
  displayBars: [],
  initialHeights: [],
};

export const barsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_BARS:
      return {
        nums: payload.nums,
        displayBars: payload.displayBars,
        initialHeights: payload.initialHeights,
      };
    default:
      return state;
  }
};
