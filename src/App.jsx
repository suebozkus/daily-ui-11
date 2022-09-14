import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Trigger message</h1>
      <button>Message</button>
      <div className="modal d-none">
        <h2>Successbox</h2>
        <p>This was successful.</p>
        <button>Confirm</button>
      </div>
    </div>
  );
}

export default App;
