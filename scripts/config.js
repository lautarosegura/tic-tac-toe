function openPlayerConfig(event) {
	editedPlayer = +event.target.dataset.playerid;
	playerConfigOverlayElement.style.display = 'block';
	backdropElement.style.display = 'block';
}

function closePlayerConfig() {
	playerConfigOverlayElement.style.display = 'none';
	backdropElement.style.display = 'none';
	formElement.firstElementChild.classList.remove('error');
	errorsOutputElement.textContent = '';
	formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
	event.preventDefault();
	const formData = new FormData(event.target);
	const enteredPlayerName = formData.get('playername').trim();

	if (!enteredPlayerName) { //enteredPlayerName === '';
		event.target.firstElementChild.classList.add('error');
		errorsOutputElement.textContent = 'Please enter a valid name!';
		return;
	}

	const updatedPlayerData = document.getElementById('player-' + editedPlayer + '-data');
	updatedPlayerData.children[1].textContent = enteredPlayerName;
	players[editedPlayer - 1].name = enteredPlayerName;

	if (!gameIsOver) {
		activePlayerNameElement.textContent = enteredPlayerName;
		updatedPlayerData.children[1].textContent = enteredPlayerName;
	}

	closePlayerConfig();
}

function openErrorModal(message) {
	errorMessageElement.textContent = message;
	errorModalElement.style.display = 'block';
	backdropElement.style.display = 'block';
}

function closeErrorModal() {
	errorMessageElement.textContent = '';
	errorModalElement.style.display = 'none';
	backdropElement.style.display = 'none';
}