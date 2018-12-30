let points = [];
let iteration_n = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noLoop();

	noFill()
	stroke(255);

	initPoints();

	draw();
}

function initPoints() {
	iteration_n = 0;

	let l = 0.75 * Math.min(width, height);
	let h = l * Math.sqrt(3) / 2;

	points = [{
			x: width / 2 - l / 2,
			y: height / 2 + h / 3
		},
		{
			x: width / 2 + l / 2,
			y: height / 2 + h / 3
		},
		{
			x: width / 2,
			y: height / 2 - 2 * h / 3
		}
	];
}

function iterate() {
	iteration_n++;
	for (let i = 0; i < points.length; i += 1 + 3) {
		let next_i = (i == points.length - 1 ? 0 : i + 1);
		let A = points[i];
		let B = points[next_i];
		let orth_displacement = {
			x: 1 / 3 * (A.y - B.y),
			y: 1 / 3 * (B.x - A.x)
		};
		points.splice(next_i, 0, { // add B'
			x: A.x + 2 / 3 * (B.x - A.x),
			y: A.y + 2 / 3 * (B.y - A.y),
		})
		points.splice(next_i, 0, { // add C
			x: 0.5 * (A.x + B.x) + orth_displacement.x,
			y: 0.5 * (A.y + B.y) + orth_displacement.y,
		})
		points.splice(next_i, 0, { // add A'
			x: A.x + 1 / 3 * (B.x - A.x),
			y: A.y + 1 / 3 * (B.y - A.y),
		})
	}
}

function draw() {
	background(0);
	strokeWeight(Math.pow(2, -iteration_n));
	for (let i = 0; i < points.length; i++) {
		let next_i = (i == points.length - 1 ? 0 : i + 1);
		line(points[i].x, points[i].y, points[next_i].x, points[next_i].y);
	}
}

function keyPressed(keyCode) {
	if (keyCode.key == " ") {
		iterate();
		draw();
	} else if (keyCode.key == "d") {
		initPoints();
		draw();
	}
}

function mouseMoved() {}

function mouseDragged() {}

function mousePressed() {}

function mouseReleased() {}

function mouseClicked() {}

function doubleClicked() {}
