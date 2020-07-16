// General
let gamePlayStatus = false;

// How to play:
const howToPlay = document.querySelector('#how-to-play')



// Button to show the rules:
const showRulesBtn = document.querySelector('.show-rules-btn');
// Button to hide the rules:
const closeRulesBtn = document.querySelector('.close-rules-btn');
// Button to play:
const playBtn = document.querySelector('.play-btn');
// Button to restart the game:
const restartBtn = document.querySelector('.restart-btn');


// Event listener to add the show class:
showRulesBtn.addEventListener('click', () => {
  howToPlay.classList.add('show');
});
// Event listener to remove the show class:
closeRulesBtn.addEventListener('click', () => {
  howToPlay.classList.remove('show');
});
// Event listner to start the game:
playBtn.addEventListener('click', () => {
  console.log('Play');
  gamePlayStatus = true;
});
// Event listner to restrt the game:
restartBtn.addEventListener('click', () => {
  console.log('Restart');
  gamePlayStatus = false;
})