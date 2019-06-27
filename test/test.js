const assert = require('assert');
const jsdom = require('jsdom');
const mocha = require('mocha');
const describe = mocha.describe
const before = mocha.before;
const it = mocha.it

const { JSDOM } = jsdom;
const { document } = (new JSDOM('')).window;
var doc = root.document || document;

const program = require('../src/functions.js')


describe('insurance quote estimator', () => {
  describe('baseByTwenty()', () => {
    beforeEach(function() {
      this.base === 100;
    })
    it('base amount should be 100', () => {
      let expected = 100
      let actual = program.baseByTwenty()
      assert(expected === actual)
    })
  })
  describe('ageValidator()', () => {
    it('should be a number', () => {
      let age = 18
      let expected = true
      let actual = typeof program.ageValidator(age) === 'number'
      assert(expected === actual)
    })
    it('should not accept customers younger than 18 years old', () => {
      let age = 10
      let expected = 'This insurance policy is not available for those under 18 at this time.'
      let actual = program.ageValidator(age)
      assert(expected === actual)
    })
    it('should return the number of 5-year-blocks over 18 years of age', () => {
      let age = 23
      let expected = 1
      let actual = program.ageValidator(age)
      assert(expected === actual)
    })
    it('should return the number of 5-year-blocks over 18 years of age', () => {
      let age = 20
      let expected = 0
      let actual = program.ageValidator(age)
      assert(expected === actual)
    })
  })
  describe('baseByTwenty()', () => {
    it('should return the number of 5-year-blocks over 18 years of age', () => {
      let fiveYrBlocks = 1
      let expected = 120
      let actual = program.baseByTwenty(fiveYrBlocks)
      assert(expected === actual)
    })
    it('should return the number of 5-year-blocks over 18 years of age', () => {
      let fiveYrBlocks = 3
      let expected = 160
      let actual = program.baseByTwenty(fiveYrBlocks)
      assert(expected === actual)
    })
  })
  describe('returnCostIncrease()', () => {
    it('should increase base cost by 0% for no conditions', () => {
      let conditionName = 'none'
      let baseCost = 100
      let expected = 100
      let actual = program.returnCostIncrease(baseCost, conditionName)
      assert(expected === actual)
    })
    it('should increase base cost by 1% for allergies', () => {
      let conditionName = 'allergies'
      let baseCost = 100
      let expected = 101
      let actual = program.returnCostIncrease(baseCost, conditionName)
      assert(expected === actual)
    })
    it('should increase base cost by 6% for sleep apnea', () => {
      let conditionName = 'sleep apnea'
      let baseCost = 100
      let expected = 106
      let actual = program.returnCostIncrease(baseCost, conditionName)
      assert(expected === actual)
    })
    it('should increase base cost by 17% for heart disease', () => {
      let conditionName = 'heart disease'
      let baseCost = 100
      let expected = 117
      let actual = program.returnCostIncrease(baseCost, conditionName)
      assert(expected === actual)
    })
  })
  describe('femaleDiscount()', () => {
    it('should subtract 12 dollars from final quote', () => {
      let finalQuote = 120
      let expected = (108).toFixed(2)
      let actual = program.femaleDiscount(finalQuote)
      assert(expected === actual)
    })
  })
})


