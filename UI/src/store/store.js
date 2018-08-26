import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import Logger from 'redux-logger'

import Reducers from './reducers';

const initialState = {};
const midware = [Thunk,Logger];

const store = createStore(Reducers, initialState,applyMiddleware(...midware));
export default store;

