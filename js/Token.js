class Token{
	constructor(index, player) {
		this.player = player;
		this.id = `token-${index}-${player.id}`;
		this.dropped = false;
		this.columnLocation = 0;
	}



/** 
		* Gets the HTML element with the associated id as the token Object
  	* @return  {element}   HTML element for token with matching id
  */
	get htmlToken(){
		return document.getElementById(this.id);
	}

/** 
		* Gets left offset of html element.
  	* @return  {number}   Left offset of token object's htmlToken.
  */
	get offsetLeft(){
		return this.htmlToken.offsetLeft;
	}

	/**
	 * Draws new HTML token
	 */
	drawHTMLToken() {
		const token = document.createElement('div');
		document.getElementById('game-board-underlay').appendChild(token);
		token.setAttribute('id', this.id);
		token.setAttribute('class', 'token');
		token.style.backgroundColor = this.player.color;
	}

/** 
	 * Moves html token one column to left.
*/
	moveLeft(){
		if(this.columnLocation > 0){
			this.htmlToken.style.left = this.offsetLeft - 76;
			console.log(this.offsetLeft);
			this.columnLocation -= 1;
		}
	}
/** 
  * Moves html token one column to right
  * @param   {number}    columns - number of columns on the game board    
 */
	moveRight(columns){
		if (this.columnLocation < columns - 1) {
			this.htmlToken.style.left = this.offsetLeft + 76;
			console.log(this.offsetLeft);
			this.columnLocation += 1;
		}
	}

/** 
 * Drops html token into targeted board space.
 * @param   {Object}   target - Targeted space for dropped token.
 * @param   {function} reset  - The reset function to call after the drop animation has completed.
 */
	dropToken(target, reset){
		this.dropped = true;

		$(this.htmlToken).animate({
			top: (target.y * target.diameter)
	}, 750, 'easeOutBounce', reset);

	}



}