import { useState, useEffect } from "react";
import "./App.css";
import generateTicket from "./generateTicket.helper";

function App() {
  const length = 3;
  const [ticket, setTicket] = useState([]);
  const [winner, setWinner] = useState(false);
  useEffect(() => {
    setWinner(false);
    let a = generateTicket(length);
    setTicket(a);
  }, []);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < length; i++) {
      sum += ticket[i];
    }
    if (sum == 15) {
      setWinner(true);
    }
  });

  return (
    <>
      <h1>{winner ? "Congratulations you won the lottery 🎉" : ""}</h1>
      <h1>{ticket.join("")}</h1>
      <button
        onClick={() => {
          setWinner(false);
          setTicket(generateTicket(length));
        }}
      >
        Generate Ticket
      </button>
    </>
  );
}

export default App;
