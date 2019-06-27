const assert = require('assert');
const jsdom = require('jsdom-global')();
const mocha = require('mocha');
const describe = mocha.describe
const it = mocha.it
global.document = jsdom();
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = {userAgent: 'node.js'};

const program = require('../index.js');



describe('insurance quote estimator', () => {
  describe('ageValidator()', () => {
    it('should return number', () => {
      let age = 18
      let expected = true
      let actual = typeof program.ageValidator(age) === 'number'
      assert(expected === actual)
    })
  })
})
