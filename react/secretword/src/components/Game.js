import "./Game.css";
import trofeu from "../assets/game/trofeu.png";
import coracao from "../assets/game/coracao.png";
const Game = ({ verifyLetter }) => {
	return (
		<div className="wrapper">
			<div className="game">
				<div className="game__header">
					<div className="game__box-points">
						<img src={trofeu} className="game__header-icon" alt="" />
						<div className="game__points">
							<p>Pontos</p>
							<p>1250</p>
						</div>
					</div>

					<div>
						<h1>SECRET WORLD</h1>
					</div>

					<div className="game__tentativas">
						<img className="game__header-icon" src={coracao} width={10} alt="" />
						<div>
							<p>Tentativas</p>
							<span>6/6</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Game;
