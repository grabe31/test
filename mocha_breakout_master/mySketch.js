/* Programmer: Eric Grabe
 * Date Created: 1/11/24
 * Last Updated: 3/13/25
 * Clone of the arcade game Breakout
 */

var b;
var p;
var w;


function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	
	b = new Ball(windowWidth/2, windowHeight/2, random(-3, 3), 4);
	p = new Paddle(windowWidth/2, windowHeight-50);
	w = new Wall();
	
	
}

function draw() {
	background(100);
	w.display();
	b.display();
	b.move();
	
	if(hitDetect(b, p)){
		if(b.x > p.x - p.w && b.x < p.x + p.w){ //between edges of paddle
		 b.bounceY();
		}
		else if(b.x < p.x - p.w && b.x > p.x + p.w){ //outside edges of paddle
			b.bounceX();
		}
	}
	else if(b.y < 0){
		b.bounceY();
	}
	else if(b.x < 0 || b.x > windowWidth){
		b.bounceX();
	}
	w.hitWall();
	p.display();
	p.move();


}

	//detect hits between the ball and the object passed into function
function hitDetect(o1, o2){
	if(o1.x > o2.x-o2.w && o1.x < o2.x+o2.w && o1.y > o2.y - o2.h && o1.y < o2.y + o2.h){
		return true;
	}
	else{
		return false;
	}
	
}

function keyPressed(){
	devControl();
}



function devControl(){
	b.x = windowWidth/2;
	b.y = windowHeight/2;
	b.xSpeed = random(-3, 3);
	b.ySpeed = 4;
}