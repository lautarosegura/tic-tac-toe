function startNewGame() {
	if (players[0].name === '' || players[1].name === '') {
		return;
	}
	gameAreaElement.style.display = 'block';
}