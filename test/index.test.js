/* global describe, before, it */

import sinon from 'sinon';
import { assert } from 'chai';

import index from '../src/index';

describe('src/index.js', () => {
  let event;
  let context;
  let callback;
  before(() => {
    event = {};
    context = {};
    callback = sinon.spy();
  });

  describe('handler', () => {
    it('should return completed message when the function is called.', async () => {
      await index.handler(event, context, callback);
      assert.match(callback.args[0][1].body, /success/);
    });
    it('should import module.', async () => {
      await index.handler(event, context, callback);
      assert.match(callback.args[0][1].body, /8/);
    });
  });
});
