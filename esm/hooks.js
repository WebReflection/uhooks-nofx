export const dropEffect = () => {};

export const hasEffect = () => false;

export const isFunction = f => typeof f === 'function';

export const hooked = callback => function () {
  return callback.apply(this, arguments);
};

export const wait = Promise.resolve();
