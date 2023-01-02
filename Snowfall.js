let circleY = [50, 100, 150, 200, 250];

function setup() {
  createCanvas(300, 300);
  for (i = 0; i < 25; i++){
    circleY[i] = random(0, height);
  }
}

function draw() {
  background(50);

  for (let i = 0; i < 25; i++) {
    let circleX = width * (i + 1) / circleY.length;
    circle(circleX, circleY[i], 25);

    circleY[i]++;

    if (circleY[i] > height) {
      circleY[i] = 0;
    }
  }
}
