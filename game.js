// Global:
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const frameRate = 30;

const ball = {
  x: canvas.width/2,
  y: canvas.height/2,
  r: 10,
  dx: 5,
  dy: 3
}

window.onload = () => {
  setInterval(game, 1000/frameRate);
}

const game = () => {
  if(gamePlayStatus) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    moveBall();
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
  }
}







