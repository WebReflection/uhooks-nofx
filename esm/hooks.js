export const dropEffect = () => {};

export const hasEffect = () => false;

export const hooked = callback => function () {
  return callback.apply(this, arguments);
};

export const wait = Promise.resolve();
