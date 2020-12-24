'use strict';
const getValue = (value, f) => typeof f === 'function' ? f(value) : f;

const useReducer = (reducer, value, init) => [
  typeof init === 'function' ? init(value) : getValue(void 0, value),
  newValue => {
    value = reducer(value, newValue);
  }
];
exports.useReducer = useReducer;

const useState = value => useReducer(getValue, value);
exports.useState = useState;
