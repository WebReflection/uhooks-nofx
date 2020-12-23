'use strict';
const createContext = value => ({
  provide(newValue) {
    this.value = newValue;
  },
  value
});
exports.createContext = createContext;

const useContext = ({value}) => value;
exports.useContext = useContext;
