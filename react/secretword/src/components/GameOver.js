import "./GameOver.css";
import gameOver from "../assets/gameOver/game-over.png";

const GameOver = (gameOver) => {
	return (
		<div className="wrapper">
			<div className="game-over">
				<img src={gameOver} alt="" width={150} />
  
				<h1>GAME OVER</h1>
				<p>A palavra era:</p>
				<h2>PALAVRA</h2>

				<button onClick={startGame} className="game-over__button">JOGAR NOVAMENTE</button>

			</div>
		</div>
	);
};

export default GameOver;