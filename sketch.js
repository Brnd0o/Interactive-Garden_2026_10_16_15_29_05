let img;
let scaleSlider;

async function setup() {
  img = await
  loadImage('BiggerGardenImage.jpg');
  createCanvas(800, 700, WEBGL);
  scaleSlider = createSlider(0.1, 3, 1, 0.1);
  scaleSlider.position(10,10);
}

function draw() {
  panorama (img);
  orbitControl();
  imageLight(img);
  angleMode(DEGREES);

let s = scaleSlider.value();
push();
    scale(s);

  let angle = frameCount * 1.0;
  rotateY(angle);

  noStroke();
  specularMaterial(50);
  metalness(0);

push();
  fill('yellow');
  sphere(30);
pop();
  
  // Petal 1
push();
  fill('white');
  translate(55, 0, 0);
  scale(2.0, 1.0, 0.3);
  sphere(20);
pop();
  
  // Petal 2
push();
  fill('white');
  translate(-55, 0, 0);
  scale(2.0, 1.0, 0.3);
  sphere(20);
pop();

  // Petal 3
push();  
  fill('white');
  translate(30, 50, 2.9);
    rotateX(0);
    rotateY(0);
    rotateZ(55);
    scale(2.0, 1.0, 0.3); 
    sphere(20);
  pop(); 

  //Petal 4
push();  
  fill('white');
  translate(-30, 50, 2.9);
    rotateX(0);
    rotateY(0);
    rotateZ(-55);
    scale(2.0, 1.0, 0.3); 
    sphere(20);
pop();

  //Petal 5
push(); 
  fill('white');
  translate(-25, -40, 2.9);
    rotateX(0);
    rotateY(0);
    rotateZ(55);
    scale(2.0, 1.0, 0.3); 
    sphere(20);
pop();

  //Petal 6
push();  
  fill('white');
  translate(30, -40, 2.9);
    rotateX(0);
    rotateY(0);
    rotateZ(-55);
    scale(2.0, 1.0, 0.3); 
    sphere(20);
pop();

  //Plant Stem
push();
    fill('green');
    translate(0, 75, 0);
    cylinder(10, 200);
pop();
  
  //Pot
  push();
    fill('brown');
    shininess(200);
    translate(0, 205, 0);
    cylinder(30, 70);
pop();
  //Pot Edge
push();
    fill('brown');
    shininess(200);
    translate(0, 180, 0);
    cylinder(35, 20);
pop();
}