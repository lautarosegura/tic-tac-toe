const gameData = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
]

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
	{
		name: '',
		symbol: 'X'
	},
	{
		name: '',
		symbol: 'O'
	},
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const errorModalElement = document.getElementById('error-overlay');
const activePlayerNameElement = document.getElementById('active-player-name');
const errorMessageElement = document.getElementById('error-message');
const gameOverElement = document.getElementById('game-over');

const editPlayerOneBtnElement = document.getElementById('edit-player-one-btn');
const editPlayerTwoBtnElement = document.getElementById('edit-player-two-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn');
const closeErrorModalBtn = document.getElementById('close-modal-btn');
const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById('game-board');


editPlayerOneBtnElement.addEventListener('click', openPlayerConfig);
editPlayerTwoBtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);
startNewGameBtnElement.addEventListener('click', startNewGame);
closeErrorModalBtn.addEventListener('click', closeErrorModal);
backdropElement.addEventListener('click', closeErrorModal);

for (const gameFieldElement of gameFieldElements) {
	gameFieldElement.addEventListener('click', selectGameField);
}