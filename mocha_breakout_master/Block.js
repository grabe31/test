class Block{
	
	constructor(x, y, blockColor, index){
		this.x = x;
		this.y = y;
		this.w = 30;
		this.h = 10;
		this.blockColor = blockColor
		this.index = index-1;
	}
	
	display(){
		fill(this.blockColor);
			rect(this.x, this.y, 60, 20);
		fill(0);
		text(str(this.index), this.x, this.y)
	}
	
	update(newIndex){
		this.index = newIndex;
	}
	
	delete(){
		w.bl.splice(this.index, 1);
	}
	

	
	
	
	
	
}