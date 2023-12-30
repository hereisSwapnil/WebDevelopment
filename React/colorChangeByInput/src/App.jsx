import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [username, color]);
  return (
    <>
      {username && <h1>Hello {username}!</h1>}
      {color && <h1>Your favorite color is {color}!</h1>}
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        name="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </>
  );
}

export default App;
