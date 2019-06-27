# Seori Sachs - TICKLE Insurance Quote Estimator 

## Features

Please `npm install` to get all dependencies! 

The TICKLE app allows the user to input their basic information (name, age, gender, and health condition) to get an estimate for their TICKLE health plan.

The output will simply return the dollar amount the user should be expected to pay annually for their life insurance based on their personal information. 

The guidelines were: 
- The base cost of insurance is $100 annually.
- For every 5 years over the age of 18 years old, the base price increases by $20. 
- In this calculation, life insurance is only available for people over the age of 18.
- Allergies | 1%
- Sleep Apnea | 6%
- Heart Disease | 17%
- Women get $12 off 

### Extras
Opted to add a 'none' health condition option, which resulted in a 0% increase, for the potential edge case that some users may not have any health conditions. 

## Design
Purely HTML/CSS to focus more on the logic (src/index.js)

## Technologies

TO OPEN: Simply follow (src/index.html) and click on `index.html` to see the application on your browser.

`HTML`, `CSS`, and `Javascript` were used to build this site's front end. `Mocha` was used a testing framework to test the truthiness of the functions that made up the parameters. _The actual logic being tested is in (src/logic.js) since `Mocha` does not have access to `document` (the browser) in the command line.

To run tests, in the command line, run `npm test`

## Notes

`npm test` doesn't reach the Conditions array. However, the `returnCostIncrease` function does produce an estimated quote. 