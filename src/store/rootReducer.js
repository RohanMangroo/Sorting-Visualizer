import { combineReducers } from 'redux';
import { createStore } from 'redux';
import barsReducer from './barsReducer';
import buttonSelectionReducer from './buttonSelectionReducer';

const rootReducer = combineReducers({
  bars: barsReducer,
  buttonSelection: buttonSelectionReducer,
});
const store = createStore(rootReducer);

export default store;
