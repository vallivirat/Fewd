import logo from "./logo.svg";
// import "./App.css";
// import Home from "./components/Home";
// import Counter from "./components/Counter";
// import CounterClass from "./components/CounterClass";
// import Destructuring from "./components/Destructuring";
// import Quiz from "./components/Quiz.";
// import Onclick from "./components/Onclick";

import FocusBlur from "./components/FocusBlur";
import TextUpdater from "./components/TextUpdater";
import HoverMessage from "./components/HoverMessage";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello world</h1>
      <Home name="valli" />
      <Counter />
      <CounterClass />
      <Destructuring name="valli" age="20" /> */}
      {/* <Quiz /> */}
      {/* <Onclick></Onclick> */}

      <FocusBlur></FocusBlur>
      <TextUpdater></TextUpdater>
      <HoverMessage></HoverMessage>
    </div>
  );
}

export default App;
