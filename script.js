const textInput = document.querySelector('#text-input');
const userInput = document.querySelector('#user-input');
const startButton = document.querySelector('#start-button');
const timer = document.querySelector('#time');
const errorCount = document.querySelector('#error-count');
const speedWPM = document.querySelector('#speed-wpm');
const speedCPM = document.querySelector('#speed-cpm');

let text = "Type the text displayed above.";
textInput.value = text;

let startTime;
let isRunning = false;

userInput.addEventListener('input', (e) => {
  if (!isRunning) {
    return;
  }
  
  let currentTime = (new Date().getTime() - startTime) / 1000;
  timer.innerHTML = currentTime.toFixed(1);

  let errors = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== userInput.value[i]) {
      errors++;
    }
  }
  errorCount.innerHTML = errors;
  
  let typedWords = userInput.value.split(" ").filter(word => word !== "").length;
  let typedCharacters = userInput.value.length;
  speedWPM.innerHTML = (typedWords / (currentTime / 60)).toFixed(2);
  speedCPM.innerHTML = (typedCharacters / (currentTime / 60)).toFixed(2);
});

startButton.addEventListener('click', () => {
  if (isRunning) {
    return;
  }
  isRunning = true;
  userInput.disabled = false;
  userInput.value = "";
  startTime = new Date().getTime();
  timer.innerHTML = 0;
  errorCount.innerHTML = 0;
  speedWPM.innerHTML = 0;
  speedCPM.innerHTML = 0;
  userInput.focus();
});

}
