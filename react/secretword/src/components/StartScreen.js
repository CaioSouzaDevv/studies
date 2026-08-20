import "./StartScreen.css";
import startScreenLogo from "../assets/startScreen/start-screen-logo.png";

const StartScreen = ({ startGame }) => {
	return (
		<div className="start">
			<img src={startScreenLogo} className="start__logo" alt="Secret World" />

			<h1>Bem-vindo ao jogo</h1>
			<p>Adivinha a palavra secreta letra por letra <br /> e teste seus conhecimentos! </p>

			<button onClick={startGame}  className="start_button">Começar o jogo</button>
		
		</div>
	);
};

export default StartScreen;