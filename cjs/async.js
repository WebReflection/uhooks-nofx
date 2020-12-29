'use strict';
const hooked = callback => async function () {
  return await callback.apply(this, arguments);
};
exports.hooked = hooked;

(m => {
  exports.wait = m.wait;
  exports.dropEffect = m.dropEffect;
  exports.hasEffect = m.hasEffect;
  exports.createContext = m.createContext;
  exports.useContext = m.useContext;
  exports.useCallback = m.useCallback;
  exports.useMemo = m.useMemo;
  exports.useEffect = m.useEffect;
  exports.useLayoutEffect = m.useLayoutEffect;
  exports.useReducer = m.useReducer;
  exports.useState = m.useState;
  exports.useRef = m.useRef;
})(require('./index.js'));
