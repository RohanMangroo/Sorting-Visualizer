// Action Type
const UPDATE_BARS = 'UPDATE_BARS';
const UPDATE_BAR_COUNT = 'UPDATE_BAR_COUNT';
const UPDATE_SPEED = 'UPDATE_SPEED';

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
//This Redux function is used by the sliders to update the barCount. The barCount prop is attached to the Bars component, so if ever barCount is updated, the Bars component wil re render
export const updateBarCount = (barCount) => {
  return {
    type: UPDATE_BAR_COUNT,
    payload: {
      barCount,
    },
  };
};

export const updateSpeed = (speed) => {
  return {
    type: UPDATE_SPEED,
    payload: {
      speed,
    },
  };
};

const initialState = {
  nums: [],
  displayBars: [],
  initialHeights: [],
  barCount: 100,
  speed: 100,
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
    case UPDATE_SPEED:
      return {
        ...state,
        speed: payload.speed,
      };
    default:
      return state;
  }
};

export default barsReducer;
