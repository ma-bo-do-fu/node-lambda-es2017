import { assert } from 'chai';
import asyncfunc from '../../src/lib/asyncfunc';

describe('src/lib/asyncfunc.js', function () {
    it('should return resolved', async function () {
        const result = await asyncfunc();
        assert.equal(result, 'resolved');
    });
});
