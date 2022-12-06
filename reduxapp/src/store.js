import { createStore } from '@reduxjs/toolkit'
import RootReducers from './Reducers/index';

const store = createStore(RootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
