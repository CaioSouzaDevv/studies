import "./App.css";

import { useCallback, useEffect, useState } from "react";

import { wordsList } from "./data/words";

import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";



function App() { 
    const [etapa, setEtapa] = useState('startScreen');

    return (
        <>
          {etapa === 'inicio' &&
      <Game />
    }

    {etapa === 'gameover' && 
    <GameOver />}

    {etapa === 'startScreen' && 
    <StartScreen />
    }
        </>
    )
  
    
// return <GameOver />

}
export default App;
