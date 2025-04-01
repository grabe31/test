class Wall{
	
	constructor(){
		this.bl = []
		
		this.buildWall();
		
	}
	
	display(){
		for(var block of this.bl){
			block.display();
	}
	}
	
	hitWall(){
			
		for(var block of this.bl){
			block.update(this.bl.indexOf(block))
		if(hitDetect(b, block)){
			block.delete();
			b.bounceY();
		}
		}
	}
	
	
	buildWall(){
		var counter = 0;
		var blockColor;
		for(var j = 10; j < 80; j+=20){
		for(var i = 45; i < windowWidth; i+=60){
		
			//every seventh block is red
		if(counter%7 == 1){
			blockColor = color('red');
		}
		else{
			blockColor = color('blue');
		}
		counter++;
	
			var block = new Block(i, j, blockColor, counter);
			this.bl.push(block);
	}
		}
	}
		
	
	
	
	
	
}