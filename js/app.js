const game = new Game();

/* Listens for click of `#begin-game` button and calls startGame();
*/

document.getElementById('begin-game').addEventListener('click', function(){
	game.startGame();
	this.style.display = 'none';
	document.getElementById('play-area').style.opacity = '1';
})

document.addEventListener('keydown', function(e){
	game.handleKeyDown(e);
});