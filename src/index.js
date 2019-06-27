//Allergies | 1%
//Sleep Apnea | 6%
//Heart Disease | 17%
//None | 0%

const healthConditions = [
  {
    issue: 'allergies',
    costIncrease: 0.01
  },
  {
    issue: 'sleep apnea',
    costIncrease: 0.06
  },
  {
    issue: 'heart disease',
    costIncrease: 0.17
  },
  {
    issue: 'none',
    costIncrease: 0.00
  }
]

function ageValidator(age) {
  let minAge = 18;
  if (age < minAge) {
    alert('This insurance policy is not available for those under 18 at this time.')

  }

  let ageDifference = age - minAge
  let multiplier = Math.floor(ageDifference / 5);
  return multiplier;
}

function baseByTwenty(fiveYears) {
  let base = 100;
  let additionalCost = fiveYears * 20;
  return base + additionalCost;

}

function returnCostIncrease(healthCondition, newCost) {
  let conditionPercent = healthConditions.filter(condition => condition.issue === healthCondition);
  let costFactor = conditionPercent[0].costIncrease //The pure factor percentage 
  let conditionBasePercentage = costFactor * newCost;
  let estimatedQuote = newCost + conditionBasePercentage

  return estimatedQuote;

}

function femaleDiscount(newEstimatedQuote) {
  let femDiscount = 12;
  let femaleFinalDiscount = newEstimatedQuote - femDiscount;
  return (femaleFinalDiscount).toFixed(2)
}


function quoteCreator(customer) {
  let age = customer.age
  let healthIssue = customer.issue
  let fiveYrBlocks = ageValidator(age)
  let newBaseQuote = baseByTwenty(fiveYrBlocks)
  let baseCostAndConditions = returnCostIncrease(healthIssue, newBaseQuote)
  return customer.gender === 'female' ? femaleDiscount(baseCostAndConditions) : baseCostAndConditions
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('insurance-form').addEventListener('submit', submit)
})

function submit(e) {
  e.preventDefault()
  let newCustomer = {} //Customer's state
  newCustomer.name = document.getElementById('name').value
  newCustomer.age = document.getElementById('age').value
  newCustomer.gender = document.querySelector('input[name="gender"]:checked').value
  newCustomer.issue = document.getElementById('health-condition').value
  let quote = quoteCreator(newCustomer)
  console.log(newCustomer) //Populated state
  displayQuote(newCustomer, quote)
}

function displayQuote(newCustomer, quote) {
  let name = newCustomer.name;
  let priceDisplay = document.getElementById("your-price")
  priceDisplay.innerHTML = `${name}, your estimated quote is $${quote}`
}