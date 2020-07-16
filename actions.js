// Draw ball:
const drawBall = () => {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2, true);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.closePath();
}

// Move ball:
const moveBall = () => {
  ball.x += ball.dx;
  ball.y += ball.dy;

  if(ball.x - ball.r < 0) {  
    ball.dx *= -1;
  }
  if(ball.x + ball.r > canvas.width) {
    ball.dx *= -1;
  }
  if(ball.y - ball.r < 0) {
    ball.dy *= -1;
  }
  if(ball.y + ball.r > canvas.height) {
    ball.dy *= -1;
  }
}