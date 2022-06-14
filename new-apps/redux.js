const redux = require('redux');

import { createStore } from 'redux';

const initialState = {
    value: 0,
    age: 17
}

// reducer
const rootReducer = (state = initialState, action) => {
    return state;
}

// store 
const store = createStore(rootReducer);
console.log(store.getStore());

// dispatching action

// subscribtion