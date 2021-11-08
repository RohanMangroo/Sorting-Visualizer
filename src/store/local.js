import { createStore } from 'redux';

// Type constants
const UPDATE_BARS = 'UPDATE_BARS';

// Action creators
export const updateBars = (nums, heights) => {
  return {
    type: UPDATE_BARS,
    payload: {
      nums,
      heights,
    },
  };
};

const initialState = {
  nums: [],
  heights: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_BARS:
      return { nums: payload.nums, heights: payload.heights };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
