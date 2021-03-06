// Action Type
const UPDATE_SWAPS = 'UPDATE_SWAPS';
const UPDATE_CHECKS = 'UPDATE_CHECKS';
const UPDATE_RECURSIVE_SPLITS = 'UPDATE_RECURSIVE_SPLITS';
const RESET_METRICS = 'RESET_METRICS';

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
export const updateRecursiveSplits = (value) => {
  return {
    type: UPDATE_RECURSIVE_SPLITS,
    payload: {
      splits: value,
    },
  };
};

export const resetMetrics = () => {
  return {
    type: RESET_METRICS,
    payload: {
      swaps: 0,
      checks: 0,
      splits: 0,
    },
  };
};
const initialState = {
  swaps: 0,
  checks: 0,
  splits: 0,
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
    case UPDATE_RECURSIVE_SPLITS:
      return {
        ...state,
        splits: payload.splits,
      };
    case RESET_METRICS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default barsReducer;
