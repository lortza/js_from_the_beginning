let min = 1,
    max = 5,
    winningNum = generateRandomNum(),
    guessesLeft = 3;

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      submitBtn = document.querySelector('#submit-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNum.textContent = min
maxNum.textContent = max

game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload()
  }
})

submitBtn.addEventListener('click', function(){
  // e.preventDefault()
  let guess = parseInt(guessInput.value)

  // Check for input validity
  if( isNaN(guess) || (guess < min) || (guess > max)){
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red')
  }

  // Check if win
  if(guess === winningNum){ // you win
    gameOver(true, `${winningNum} is correct. YOU WIN.`)
  } else {
    guessesLeft -= 1

    if(guessesLeft === 0){ // you lose
      gameOver(false, `You Lose. The correct number is ${winningNum}.`)
      guessInput.disabled = true

    } else { // game continues
      guessInput.value = ''

      if(guess > winningNum){
        setMessage(`Nope. ${guess} is not correct. Go lower. You have ${guessesLeft} guesses left.`, 'red')
      } else {
        setMessage(`Nope. ${guess} is not correct. Go higher. You have ${guessesLeft} guesses left.`, 'red')
      }
    }
  }//end if winningNum

})

function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red'
  guessInput.disabled = true
  guessInput.style.color = color
  guessInput.style.borderColor = color
  setMessage(msg, color)
  submitBtn.value = 'Play Again'
  submitBtn.className += 'play-again'
}

function generateRandomNum(){
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function setMessage(msg, color){
  message.style.color = color
  guessInput.style.border = `1px solid ${color}`
  message.textContent = msg
}

