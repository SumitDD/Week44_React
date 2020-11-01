import "./App.css";
import Count from "./Count";
import Members from "./ListDemo";
import SearchJokes from "./Joke";

function App() {
  return (
    <div className="App">
      <Count
        initCount={localStorage.getItem("count")}
        increment={4}
        decrement={5}
      ></Count>
      <Members></Members>
      <SearchJokes></SearchJokes>
    </div>
  );
}

export default App;
