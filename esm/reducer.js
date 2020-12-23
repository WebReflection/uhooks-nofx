import {isFunction} from './hooks.js';

const getValue = (value, f) => isFunction(f) ? f(value) : f;

export const useReducer = (reducer, value, init) => [
  isFunction(init) ? init(value) : getValue(void 0, value),
  newValue => {
    value = reducer(value, newValue);
  }
];

export const useState = value => useReducer(getValue, value);
