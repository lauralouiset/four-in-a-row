class Player{
	constructor(name, id, color, active = false, ){
		this.name = name;
		this.id = id;
		this.color = color;
		this.active = active;
		this.tokens = this.createTokens(21);
	}

/*
	* Creates token objects for Player
	* @param	{integer}		num 			- Number of tokens to be created
	* @return	{array}			tokens 		- Array of new token objects
*/

	createTokens(num){
			const tokens = [];

			for(let i = 0; i < num; i++){
				let token = new Token(i, this);
				tokens.push(token);
			}

			return tokens;
	}

/*
	* Gets all unused tokens that haven't been played
	* @return {Array} Array of unused tokens
*/
	get unusedTokens(){
		return this.tokens.filter(token => !token.dropped)
	}

	/*
		* Gets the active token by returning the first token in the array of unused tokens
		* @return {Object}  First token in the array of unused tokens
	*/
	get activeToken(){
		return this.unusedTokens[0];
	}
}