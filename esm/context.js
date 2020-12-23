export const createContext = value => ({
  provide(newValue) {
    this.value = newValue;
  },
  value
});

export const useContext = ({value}) => value;
