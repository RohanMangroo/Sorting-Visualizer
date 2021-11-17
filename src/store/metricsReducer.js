// Action Type
const UPDATE_SWAPS = 'UPDATE_SWAPS';
const UPDATE_CHECKS = 'UPDATE_CHECKS';
const UPDATE_RECURSIVE_SPLIT = 'UPDATE_RECURSIVE_SPLIT';

// Action creators
export const updateSwaps = (value) => {
  return {
    type: UPDATE_SWAPS,
    payload: {
      swaps: value,
    },
  };
};

// Action creators
export const updateChecks = (value) => {
  return {
    type: UPDATE_CHECKS,
    payload: {
      checks: value,
    },
  };
};

// Action creators
export const updateRecursiveSplit = (value) => {
  return {
    type: UPDATE_RECURSIVE_SPLIT,
    payload: {
      recursiveSplit: value,
    },
  };
};

const initialState = {
  swaps: 0,
  checks: 0,
  recursiveSplit: 0,
};

const barsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_SWAPS:
      return {
        ...state,
        swaps: payload.swaps,
      };
    case UPDATE_CHECKS:
      return {
        ...state,
        checks: payload.checks,
      };
    case UPDATE_RECURSIVE_SPLIT:
      return {
        ...state,
        recursiveSplit: payload.recursiveSplit,
      };
    default:
      return state;
  }
};

export default barsReducer;
