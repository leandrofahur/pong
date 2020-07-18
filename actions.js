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

  // Collision detection:
  // Paddle collision:
  if (
    ball.x - ball.r < paddle.x + paddle.w &&
    ball.y + ball.r > paddle.y &&
    ball.y - ball.r < paddle.y + paddle.h
  ) {
    ball.dx *= -1;
  }

  // Enemy collision:
  if (
    ball.x + ball.r > enemy.x &&
    ball.y + ball.r > enemy.y &&
    ball.y - ball.r < enemy.y + enemy.h
  ) {
    ball.dx *= -1;
    console.log(`enemy: (${enemy.x},${enemy.y})`);
    console.log(`ball: (${ball.x},${ball.y})`);
  }

}

// Move enemy:
const moveEnemy = () => {
  enemy.y += enemy.dy;

  if(enemy.y < 0) {
    enemy.dy *= -1;
  }

  if(enemy.y + enemy.h > canvas.height) {
    enemy.dy *= -1;
  }
}

// Reset ball:
const resetBall = () => {
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, ball.r, 0, Math.PI * 2, true);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.closePath();
}

// Game world:
const game = () => {
  if(gamePlayStatus) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawEnemy();
    moveBall();
    moveEnemy();
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawEnemy();
  }
}