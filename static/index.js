canvasWidth = window.innerWidth;
canvasHeight = window.innerHeight / 2;
currentPoint = {};
currentRectangle = {};

window.addEventListener("load", function () {
  let webSocket = new WebSocket("ws://localhost:3000/render");

  const canvas = document.getElementById("canvas");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  const ctx = canvas.getContext("2d");

  webSocket.onmessage = function (event) {
    const { type, shape } = JSON.parse(event.data);
    if (type === "Point") {
      currentPoint = { ...shape, Height: 0.01, Width: 0.01 };
    }

    if (type === "Rectangle") {
      currentRectangle = shape;
    }

    draw(ctx);
  };
  setTimeout(() => webSocket.send("message"), 100);
});

function draw(ctx) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.fillStyle = isPointInRect() ? "green" : "red";
  ctx.fillRect(
    currentRectangle.X * 100,
    currentRectangle.Y * 100,
    currentRectangle.Width * 100,
    currentRectangle.Height * 100
  );
  ctx.fillStyle = "black";
  ctx.fillRect(
    currentPoint.X * 100,
    currentPoint.Y * 100,
    currentPoint.Width * 100,
    currentPoint.Height * 100
  );

  const header =  document.getElementById("header");
  header.innerHTML = `Point timestamp: ${currentPoint.ts} | Rectangle timestamp: ${currentRectangle.ts}`
}

function isPointInRect() {
  if (
    currentRectangle.X < currentPoint.X &&
    currentRectangle.X + currentRectangle.Width > currentPoint.X &&
    currentRectangle.Y < currentPoint.Y &&
    currentRectangle.Y + currentRectangle.Height > currentPoint.Y
  ) {
    return true;
  }
  return false;
}
