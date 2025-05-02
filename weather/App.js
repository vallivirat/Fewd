import { useState } from "react";
import Child from "./Child";
import logo from "./logo.svg";
import Weather from "./components/Weather";
// import "./App.css";

function App() {
  let [data, setData] = useState(0);
  return (
    <div className="App">
      <Weather></Weather>
    </div>
  );
}

export default App;
