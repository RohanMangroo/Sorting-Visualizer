// Action Type
const UPDATE_BARS = 'UPDATE_BARS';
const UPDATE_BAR_COUNT = 'UPDATE_BAR_COUNT';

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

export const updateBarCount = (barCount) => {
  return {
    type: UPDATE_BAR_COUNT,
    payload: {
      barCount,
    },
  };
};

const initialState = {
  nums: [],
  displayBars: [],
  initialHeights: [],
  barCount: 100,
};

const barsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_BARS:
      return {
        ...state,
        nums: payload.nums,
        displayBars: payload.displayBars,
        initialHeights: payload.initialHeights,
      };
    case UPDATE_BAR_COUNT:
      return {
        ...state,
        barCount: payload.barCount,
      };
    default:
      return state;
  }
};

export default barsReducer;
