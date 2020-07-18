// Global:
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const frameRate = 30;

let player1Score = 0;
let player2Score = 0;
const k = 0.35;

const ball = {
  x: canvas.width/2,
  y: canvas.height/2,
  r: 10,
  dx: 7,
  dy: 5
}

const paddle = {
  x: 20,
  y: canvas.height/2 - 50,
  w: 10,
  h: 100,
  dy: 7
}

const enemy = {
  x: canvas.width - 20 - 10,
  y: canvas.height/2 - 50,
  w: 10,
  h: 100,
  dy: 5
}

window.onload = () => {
  setInterval(game, 1000/frameRate);
  addEventListener('mousemove', onUpdateMousePos);
}







