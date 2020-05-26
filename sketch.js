const HEIGHT = 500;
const WIDTH = 1000;
const PI = 3.1415926;
const g = 1;

let r1 = 100;
let m1 = 0.1;
let a1_a = 0;
let a1_v = 0;
let a1 = 0.1;

let r2 = 100;
let m2 = 0.1;
let a2 = 2;
let a2_a = 0;
let a2_v = 0;

function setup() {
	frameRate(240);
	createCanvas(WIDTH, HEIGHT);
	length1 = createSlider(1, 300, 100);
	length1.translate;
	length2 = createSlider(1, 300, 100);
	ma1 = createSlider(1, 100, 20);
	ma2 = createSlider(1, 100, 20);

}

function draw() {
	background(40);

	r1 = length1.value();
	r2 = length2.value();
	m1 = ma1.value()/500;
	m2 = ma2.value()/500;

	num1 = -g*(2*m1 + m2)*sin(a1);
	num2 = -m2*g*sin(a1-2*a2);
	num3 =-2*sin(a1-a2)*m2*((a2_v**2)*r2 + (a1_v**2)*r1*cos(a1-a2));

	a1_a = (num1+num2+num3)/r1*(2*m1+m2-m2*cos(2*a1-2*a2));
	a1_v += a1_a;
	a1 += a1_v;

	x1 = WIDTH/2 + r1 * sin(a1);
	y1 = 100 + r1 * cos(a1);

	Num1 = 2*sin(a1-a2);
	Num2 = (a1_v**2)*r1*(m1+m2);
	Num3 = g*(m1+m2)*cos(a1)+(a2_v**2)*r2*m2*cos(a1-a2);

	a2_a = (Num1*(Num2+Num3))/r2*(2*m1+m2-m2*cos(2*a1 - 2*a2));
	a2_v += a2_a;
	a2 += a2_v;
		
	x2 = x1 + r2 * sin(a2);
	y2 = y1 + r2 * cos(a2);

	stroke(150)
	line(x1, y1, x2, y2);
	line(WIDTH/2, 100, x1, y1);

	fill(30);
	ellipse(x1, y1, m1*300, m1*300);
	ellipse(x2, y2, m2*300, m2*300);

	fill(0);
	ellipse(WIDTH/2, 100, 8, 8);


}

