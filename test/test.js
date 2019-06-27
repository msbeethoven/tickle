const assert = require('assert');
//const jsdom = require('jsdom-global');
const mocha = require('mocha');
const describe = mocha.describe
const it = mocha.it
// global.document = jsdom();
const program = require('../index');



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
