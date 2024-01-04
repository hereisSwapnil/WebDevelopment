import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [joke, setJoke] = useState({});

  const getJoke = async () => {
    let res = await fetch("https://official-joke-api.appspot.com/random_joke");
    let response = await res.json();
    setJoke({ setup: response.setup, punchline: response.punchline });
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <>
      <h1>Jokes !</h1>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getJoke}>Get New Joke</button>
    </>
  );
}

export default App;
