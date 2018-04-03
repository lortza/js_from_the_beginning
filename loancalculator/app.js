// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){

  e.preventDefault()

  // Hide the results panel
  document.querySelector('#results').style.display = 'none'
  // Display the spinner
  document.querySelector('#loading').style.display = 'block'
  // Run the calculation after a 1.5 sec delay to give the spinner time
  setTimeout(calculateResults, 1500)
})

function calculateResults(){

  // Set up UI Vars
  const amount = document.querySelector('#amount')
  const interest = document.querySelector('#interest')
  const years = document.querySelector('#years')
  const monthlyPayment = document.querySelector('#monthly-payment')
  const totalPayment = document.querySelector('#total-payment')
  const totalInterest = document.querySelector('#total-interest')

  const principal = parseFloat(amount.value)
  const calculatedInterest = parseFloat(interest.value) / 100 / 12
  const calculatedPayments = parseFloat(years.value) * 12

  // Compute monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments)
  const monthly = (principal * x * calculatedInterest)/(x-1)
  document.querySelector('#loading').style.display = 'none'

  if(isFinite(monthly)){
    document.querySelector('#results').style.display = 'block'
    monthlyPayment.value = monthly.toFixed(2)
    totalPayment.value = (monthly * calculatedPayments).toFixed(2)
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2)
  } else {
    showError('Please check your numbers')
    console.log("meh. the math is wrong.")
  }

}

function showError(error){
  const errorDiv = document.createElement('div')
  errorDiv.className = 'alert alert-danger'
  errorDiv.appendChild(document.createTextNode(error))

  const card = document.querySelector('.card')
  const heading = document.querySelector('.heading')
  card.insertBefore(errorDiv, heading)

  // Clear error after 3 seconds
  setTimeout(clearError, 2000);
}

function clearError(){
  document.querySelector('.alert').remove()
}
