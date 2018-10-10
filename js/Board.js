class Board{
	constructor(){
		this.rows = 6;
		this.columns = 7;
		this.spaces = [];
		this.spaces = this.createSpaces();
	}


	/** Creates 2D array of spaces on the board
		* @return 	{Array}		An array of space objects
	*/

	createSpaces(){
		const spaces = [];

		for(let x = 0; x < this.columns; x++){
			const column = [];

			for(let y = 0; y < this.rows; y++){
				const space = new Space(x, y);
				column.push(space);
			}
			spaces.push(column);
	}
	return spaces;
	}

	drawHTMLBoard(){
		for(let column of this.spaces){
			for(let space of column){
				space.drawSVGSpace();
			}
		}
	}
}