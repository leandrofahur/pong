// General vars:
const howToPlay = document.querySelector('#how-to-play')
const showRulesBtn = document.querySelector('.show-rules-btn');
const closeRulesBtn = document.querySelector('.close-rules-btn');

// Event handlers for CSS animation:
showRulesBtn.addEventListener('click', () => {
  howToPlay.classList.add('show');
});

closeRulesBtn.addEventListener('click', () => {
  howToPlay.classList.remove('show');
});