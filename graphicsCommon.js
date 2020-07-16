// General
// How to play:
const howToPlay = document.querySelector('#how-to-play')

// Button to show the rules:
const showRulesBtn = document.querySelector('.show-rules-btn');
// Button to hide the rules:
const closeRulesBtn = document.querySelector('.close-rules-btn');

// Event listener to add the show class:
showRulesBtn.addEventListener('click', () => {
  howToPlay.classList.add('show');
});
// Event listener to remove the show class:
closeRulesBtn.addEventListener('click', () => {
  howToPlay.classList.remove('show');
});
