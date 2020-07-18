const onUpdateMousePos = (evt) => {
  var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	// mousePosX = evt.clientX - rect.left - root.scrollLeft;
	mousePosY = evt.clientY - rect.top - root.scrollTop;
	paddle.y = mousePosY - paddle.h/2

	if(paddle.y < 0) {
    paddle.y = 0;
  }

  if(paddle.y + paddle.h > canvas.height) {
    paddle.y = canvas.height - paddle.h;
  }
}