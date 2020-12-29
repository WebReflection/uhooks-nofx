export const hooked = callback => async function () {
  return await callback.apply(this, arguments);
};

export {
  wait, dropEffect, hasEffect,
  createContext, useContext,
  useCallback, useMemo,
  useEffect, useLayoutEffect,
  useReducer, useState,
  useRef
} from './index.js';
