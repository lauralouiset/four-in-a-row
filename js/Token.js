class Token{
	constructor(index, player) {
		this.player = player;
		this.id = `token-${index}-${player.id}`;
		this.dropped = false;
		this.columnLocation = 0;
	}

	drawHTMLToken(){
		const newToken = document.createElement('div');
		document.getElementById('game-board-underlay').appendChild(newToken);
		newToken.setAttribute('id', this.id);
		newToken.setAttribute('class', 'token');
		newToken.style.backgroundColor = this.player.color;
	}

// getter method to return the linked HTML element with the associated Token object
	get htmlToken(){
		return document.getElementbyId(this.id);
	}

/** 
 * Gets left offset of html element.
 * @return  {number}   Left offset of token object's htmlToken.
 */

	get offsetLeft(){

	}

	moveLeft(){

	}

	moveRight(){

	}

}