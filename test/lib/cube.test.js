import { assert } from 'chai';
import cube from '../../src/lib/cube';

describe('src/lib/cube.js', function () {
    it('should return cubed arguments', function () {
        assert.equal(cube(2), 8);
    });
});
