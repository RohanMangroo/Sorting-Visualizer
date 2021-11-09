// Action Type
const UPDATE_BAR_COUNT = 'UPDATE_BAR_COUNT';

// Action creators
export const updateBarCount = (value) => {
  return {
    type: UPDATE_BAR_COUNT,
    payload: {
      value,
    },
  };
};

const initialState = {
  barCount: 0,
};

const slidersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_BAR_COUNT:
      return {
        barCount: payload.value,
      };
    default:
      return state;
  }
};

export default slidersReducer;
