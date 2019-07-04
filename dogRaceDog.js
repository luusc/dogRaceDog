let w = 5;
let rspeed = 0.1;

let dogs = [];

let N = 48;
let n = 0;

//
// Dog CLASS
//
function Dog(id, x,y,c){
    this.x = x;
    this.y = y;
    this.color = c;
    this.id = id;
}
Dog.prototype.show = function (){
    ellipse(this.x,this.y,w,w);
}

Dog.prototype.move = function (){
    this.x = lerp(this.x,dogs[(this.id + 1)%4].x, rspeed);
    this.y = lerp(this.y,dogs[(this.id + 1)%4].y, rspeed);
}

// END OF Dog CLASS
    
function setup() {
    frameRate(10);
    createCanvas(400, 400);
    background(234);

    dogs[0] = new Dog(0,0,0,'red');
    dogs[1] = new Dog(1,0,height,'green');
    dogs[2] = new Dog(2,width,height,'blue');
    dogs[3] = new Dog(3,width,0,'magenta');
}

function draw() {
    noStroke();
    if(n < N){
	for(let i=0; i<4; i++){
	    fill(dogs[i].color);
	    dogs[i].show();
	    dogs[i].move();
	}
	n++;
    }
}
    
