import { assert } from 'chai';
import cube from '../../src/lib/cube';

describe('src/lib/cube.js', () => {
  it('should return cubed arguments', () => {
    assert.equal(cube(2), 8);
  });
});
