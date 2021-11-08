import { createStore } from 'redux';

// Type constants
const UPDATE_BARS = 'UPDATE_BARS';

// Action creators
export const updateBars = (nums, bars, initialHeights) => {
  return {
    type: UPDATE_BARS,
    payload: {
      nums,
      bars,
      initialHeights,
    },
  };
};

const initialState = {
  nums: [],
  bars: [],
  initialHeights: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_BARS:
      return {
        nums: payload.nums,
        bars: payload.bars,
        initialHeights: payload.initialHeights,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
