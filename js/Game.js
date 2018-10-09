class Game{
	constructor(){
		this.ready = false;
		this.board = new Board();
		this.players = this.createPlayers();
	}

/* 
	* Creates two player objects for the game
	* @return {Array}		An array of two Player objects
*/

	createPlayers(){
		const players = [
				new Player(`Player 1`, 1, `#e15258, true`),
				new Player(`Player 2`, 2, `#359a13`)
				];
				
		return players;
	}

}