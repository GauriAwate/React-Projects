import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppName from "./components/AppName";
import Item1 from "./components/Item1";
import Item2 from "./components/Item2";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <Item1 />
      <Item2 />
    </center>
  );
}

export default App;
