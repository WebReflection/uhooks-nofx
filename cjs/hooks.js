'use strict';
const dropEffect = () => {};
exports.dropEffect = dropEffect;

const hasEffect = () => false;
exports.hasEffect = hasEffect;

const hooked = callback => function () {
  return callback.apply(this, arguments);
};
exports.hooked = hooked;

const wait = Promise.resolve();
exports.wait = wait;
