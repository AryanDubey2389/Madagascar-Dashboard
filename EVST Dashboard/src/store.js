// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// reducers/index.js
import myReducer from './reducers';

const rootReducer =  myReducer;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
