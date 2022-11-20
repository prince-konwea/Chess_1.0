import React, {useEffect, useState} from "react";
import "./App.css"
import {gameSubject} from "./Game"

function App() {
  const [board, setBoard] = useState([])
  useEffect(() => {
    const subscribe = gameSubject.subscribe(game => setBoard(game.board))
  }, [])
  return (
    <div>

    </div>
  );
}

export default App;
