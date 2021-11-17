import { combineReducers } from 'redux';
import { createStore } from 'redux';
import barsReducer from './barsReducer';
import buttonSelectionReducer from './buttonSelectionReducer';
import metricsReducer from './metricsReducer';

const rootReducer = combineReducers({
  bars: barsReducer,
  buttonSelection: buttonSelectionReducer,
  metrics: metricsReducer,
});
const store = createStore(rootReducer);

export default store;
