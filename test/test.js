require('../src/main.js');
const assert = require('chai').assert;

describe('Array.prototype.contains',() => {
  it('Returns true when array contains item',() => {
    const uut = [ 'apple' ];
    assert(uut.contains('apple'),
      'Does not return true when array contains item.');
  });

  it('Returns false when array does not contain item',() => {
    const uut = [ 'apple' ];
    assert(!uut.contains('orange'),
      'Does not return false when array does not contain item.');
  });
});

