import { useState } from "react";
import "./App.css";

function App() {
  const [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0 });

  const incBlue = () => {
    moves.blue += 1;
    setMoves({ ...moves });
  };
  const incRed = () => {
    moves.red += 1;
    setMoves({ ...moves });
  };
  const incYellow = () => {
    moves.yellow += 1;
    setMoves({ ...moves });
  };

  return (
    <>
      <h3>Blue Moves: {moves.blue}</h3>
      <button onClick={incBlue} style={{ backgroundColor: "blue" }}>
        +1
      </button>
      <h3>Red Moves: {moves.red}</h3>
      <button onClick={incRed} style={{ backgroundColor: "red" }}>
        +1
      </button>
      <h3>Yellow Moves: {moves.yellow}</h3>
      <button onClick={incYellow} style={{ backgroundColor: "yellow" }}>
        +1
      </button>
    </>
  );
}

export default App;
