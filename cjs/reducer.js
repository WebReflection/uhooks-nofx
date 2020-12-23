'use strict';
const {isFunction} = require('./hooks.js');

const getValue = (value, f) => isFunction(f) ? f(value) : f;

const useReducer = (reducer, value, init) => [
  isFunction(init) ? init(value) : getValue(void 0, value),
  newValue => {
    value = reducer(value, newValue);
  }
];
exports.useReducer = useReducer;

const useState = value => useReducer(getValue, value);
exports.useState = useState;
