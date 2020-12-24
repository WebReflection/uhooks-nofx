const getValue = (value, f) => typeof f === 'function' ? f(value) : f;

export const useReducer = (reducer, value, init) => [
  typeof init === 'function' ? init(value) : getValue(void 0, value),
  newValue => {
    value = reducer(value, newValue);
  }
];

export const useState = value => useReducer(getValue, value);
