//Allergies | 1%
//Sleep Apnea | 6%
//Heart Disease | 17%

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
    costIncrease: 0.0

  }

]

function ageValidator(age) {
  let minAge = 18;
  if (age < minAge) {

    console.log('This insurance policy is not available for those under 18 at this time.')
    

  } 
    let ageDifference = age - minAge
    let multiplier = Math.floor(ageDifference / 5);
    return multiplier;

}

function baseByTwenty(fiveYears){
  let base = 100;
  let additionalCost = fiveYears * 20;
  return base + additionalCost;

}

function returnCostIncrease(healthCondition, newCost) {
  let conditionPercent = healthConditions.filter(condition => condition.issue === healthCondition);
  let costFactor = conditionPercent[0].costIncrease //the pure factor percentage 
  let conditionBasePercentage = costFactor * newCost;
  let estimatedQuote = newCost + conditionBasePercentage

  return estimatedQuote;

}

function femaleDiscount(newEstimatedQuote) {
  let femDiscount = 12;
  return newEstimatedQuote - femDiscount
}


function quoteCreator (customer){
  let age = customer.age
  console.log(age)
  let healthIssue = customer.issue
  let fiveYrBlocks = ageValidator(age)
  let newBaseQuote = baseByTwenty(fiveYrBlocks)
  let baseCostAndConditions = returnCostIncrease(healthIssue, newBaseQuote)
  return customer.gender === 'female' ? femaleDiscount(baseCostAndConditions) : baseCostAndConditions
}

// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('insurance-form').addEventListener('submit', submit)
// })

// function submit (event) {
//   event.preventDefault()
//   let form = document.getElementById('insurance-form')
//   let newCustomer = {}
//   newCustomer.name = document.getElementById('name').value
//   newCustomer.age = document.getElementById('age').value
//   newCustomer.gender = document.getElementById('gender').value
//   newCustomer.issue = document.getElementById('health-condition').value
//   let quote = quoteCreator(newCustomer)
//   displayQuote(newCustomer, quote)
// }

// function displayQuote (newCustomer, quote) {
//   let target = document.querySelector('#your-price')
//   let h3 = document.createElement('h3')
//   h3.innerHTML = 'Your Estimated Quote is:'
//   let p = document.createElement('p')
//   p.innerHTML = newCustomer.name + ' - ' + '$' + quote
//   target.parentNode.insertBefore(h3, target)
//   target.parentNode.insertBefore(p, target)
// }

// function quoteCreater(person) {
//   let age = person.age;
//   let issue = person.issue;
//   // let newBaseCost = returnCostIncrease(issue,  ageValidator(age) );
// let fiveYearBlock = ageValidator(age);
// let newBaseCost = baseByTwenty(fiveYearBlock);
// let baseCostWithIssues = returnCostIncrease(issue, newBaseCost);
//   return person.gender === 'female' ? femaleDiscount(baseCostWithIssues) : baseCostWithIssues;
  
// }

// document.addEventListener('DOMContentLoaded', () => {

//   let client = {}
//   client.name = document.getElementById('name').value;
//   client.age = document.getElementById('age').value;
//   client.gender = document.getElementById("gender").value;
//   client.issue = document.getElementById("health-condition").value;
//   let quote = quoteCreater(client)


//   document.getElementById('insurance-form').addEventListener('submit', function quoteCreator(e) {
//     e.preventDefault();


    
    
//     let priceDisplay = document.getElementById("your-price")
//     priceDisplay.innerHTML = 'Your Estimated Quote is: '+ quote;

//   })
// })







