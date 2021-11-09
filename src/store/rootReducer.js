import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { barsReducer } from './barsReducer';

const rootReducer = combineReducers({ bars: barsReducer });
const store = createStore(rootReducer);

export default store;
