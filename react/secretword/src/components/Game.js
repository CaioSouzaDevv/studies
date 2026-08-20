import "./Game.css";
import trofeu from "../assets/game/trofeu.png";
import coracao from "../assets/game/coracao.png";
import lampada from "../assets/game/lampada.png";

const Game = ( startGame ) => {
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

				<div className="dica">
					<img src={lampada} alt="Dica" width={100} />

					<div>
						<p>
							Dica sobre a palavra
							<br />
							Animal da Selva
						</p>
					</div>
				</div>

				<div className="adivinhe">
					<h2>Adivinhe a Palavra</h2>

					<div className="adivinhe__box">
						<span className="adivinhe__letter">A</span>
						<span className="adivinhe__letter">A</span>
					</div>
				</div>

				<div className="tentativa">
					<h2>Tente uma letra</h2>

					<div className="tentativa__box">
						<input className="tetativa__input" type="text" placeholder="Digite uma letra" />
						<button className="adivinhe__button" onClick={gameOver}>Finalizar</button>
					</div>
					<p className="tentativa__warning">Apenas uma letra por vez</p>
				</div>

				<div className="utilizadas">
					<div className="utilizadas__box">
						<h2>Letras já utilizadas</h2>
						<p className="utilizadas__letter">A</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Game;
