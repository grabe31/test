class Paddle{
	
	
	constructor(x, y){
	this.easing = 0.05;
	this.x = x;
	this.y = y;
	this.w = 100
	this.h = 10
	}
	
	display(){
		fill('white');
		strokeWeight(5);
		rect(this.x, this.y, 2*this.w, 2*this.h);
		strokeWeight(1);
	}
	
	move(){
			this.y = windowHeight-100;
			this.x+=(mouseX-this.x)*this.easing;

	}
	
	
	
}