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

const paddle = {
  x: 20,
  y: canvas.height/2 - 50,
  w: 10,
  h: 100,
  dy: 5
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
}







