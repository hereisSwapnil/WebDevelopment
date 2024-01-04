import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState({
    username: "",
    message: "",
  });

  const formSubmit = (event) => {
    // To prevent loading of page
    event.preventDefault();
    console.log(data);
    setData({
      username: "",
      message: "",
    });
  };

  const handleChange = (event) => {
    let field_ = event.target.name;
    let val_ = event.target.value;
    setData((currData) => {
      currData[field_] = val_;
      return { ...currData };
    });
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={data.username}
          name="username"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="message">Message</label>
        <input
          type="text"
          value={data.message}
          name="message"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
