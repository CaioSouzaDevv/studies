import "./Game.css";

const Game = ({verifyLetter}) => {
	return (
		<div className="start">
			<h1>game</h1>
			<button onClick={verifyLetter}>Finalizar o Jogo</button>

		</div>
	);
};

export default Game;