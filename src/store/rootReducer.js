import { combineReducers } from 'redux';
import { createStore } from 'redux';
import barsReducer from './barsReducer';
import buttonSelectionReducer from './buttonSelectionReducer';
import slidersReducer from './slidersReducer';

const rootReducer = combineReducers({
  bars: barsReducer,
  buttonSelection: buttonSelectionReducer,
  sliders: slidersReducer,
});
const store = createStore(rootReducer);

export default store;
