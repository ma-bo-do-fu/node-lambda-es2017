import { assert } from 'chai';
import asyncfunc from '../../src/lib/asyncfunc';

describe('src/lib/asyncfunc.js', () => {
  it('should return resolved', async () => {
    const result = await asyncfunc();
    assert.equal(result, 'resolved');
  });
});
