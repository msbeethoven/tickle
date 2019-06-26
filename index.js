//Allergies | 1%
//Sleep Apnea | 6%
//Heart Disease | 17%

const healthConditions = [
  {
    issue: 'allergies',
    costIncrease: .01
  },
  {
    issue: 'sleep apnea',
    costIncrease: .06
  },
  {
    issue: 'heart disease',
    costIncrease: .17
  },
  {
    issue: 'none',
    costIncrease: 0

  }

]

function adjustedCost(age) {
  let baseCost = 100;
  let minAge = 18;
  if (age < minAge) {

    console.log('This insurance policy is not available for those under 18 at this time.')
    

  } else {
    let ageDifference = age - minAge

    let multiplier = Math.floor(ageDifference / 5) // 25-18 =  7 7/5 = 1.4 --> 1 * 20

    let newCost = multiplier * 20;
    return baseCost + newCost;
  }
  

}

function returnCostIncrease(healthCondition, newCost) {
  let conditionPercent = healthConditions.filter(condition => condition.issue === healthCondition)
console.log(conditionPercent)
  let costFactor = conditionPercent[0].costIncrease //the pure factor percentage 
  let conditionBasePercentage = costFactor * newCost;
  let estimatedQuote = newCost + conditionBasePercentage

  return estimatedQuote

}

function femaleDiscount(newEstimatedQuote) {
  let femDiscount = 12;
  return newEstimatedQuote - femDiscount

}

//this is where it gets validated
// const quoteCreator = (person) => {
//   let client = {}; //object to create the client. Composed of name, age, gender, condition from
//   let name = client.name;
//   let age = client.age;
//   let gender = client.gender;
//   let condition = client.condition;

//   let newBaseCost = returnCostIncrease( adjustedCost(age) );

//   return client.gender === 'female' ? femaleDiscount(newBaseCost) : newBaseCost;

// }

function quoteCreater(person) {
  let age = person.age;
  let issue = person.condition;
  let newBaseCost = returnCostIncrease(issue,  adjustedCost(age) );

  return person.gender === 'female' ? femaleDiscount(newBaseCost) : newBaseCost;
  
}



document.addEventListener('DOMContentLoaded', () => {

  let client = {}
  client.name = document.getElementById('name').value;
  client.age = document.getElementById('age').value;
  client.gender = document.getElementsByClassName("gender").value;
  client.issue = document.getElementsByClassName("condition").value;
  let quote = quoteCreater(client)


  document.getElementById('insurance-form').addEventListener('submit', function quoteCreator(e) {
    e.preventDefault();


    
    
    let priceDisplay = document.getElementById("your-price")
    priceDisplay.innerHTML = quote;

  })
})







