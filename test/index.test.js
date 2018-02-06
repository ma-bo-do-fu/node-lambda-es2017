/* global describe, before, it */

import sinon from 'sinon';
import { assert } from 'chai';

import index from '../src/index';

describe('src/index.js', function () {
    let event;
    let context;
    let callback;
    before(function () {
        event = {};
        context = {};
        callback = sinon.spy();
    });

    describe('handler', function () {
        it('should return completed message when the function is called.', function () {
            index.handler(event, context, callback);
            assert.match(callback.args[0][1].body, /success/);
        });
        it('should import module.', function () {
            index.handler(event, context, callback);
            assert.match(callback.args[0][1].body, /8/);
        });
    });
});
