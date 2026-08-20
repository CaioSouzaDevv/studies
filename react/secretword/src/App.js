import "./App.css";

import { useCallback, useEffect, useState } from "react";

import { wordsList } from "./data/words";

import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

function App() {
	const [etapa, setEtapa] = useState("start");

	const restartGame = () => {
		setEtapa("start");
	};

	const startGame = () => {
		setEtapa("game");
	};

	const finishGame = () => {
		setEtapa("gameOver");
	};

	return (
		<>
			{etapa === "start" && <StartScreen />}
			{etapa === "game" && <Game />}

			{etapa === "gameOver" && <GameOver />}
		</>
	);

	// return <GameOver />
}
export default App;
