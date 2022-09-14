
import "./App.css";
import { useState } from "react";

function App() {
  const [ismodalopen, setismodalopen] = useState(false);
  const [issuccess, setissuccess] = useState(false);
  return (
    <div className="App">
      <h1>Trigger message</h1>
      <button
        onClick={(e) => {
          setismodalopen(!ismodalopen);
        }}
      >
        Open modal
      </button>

      <button
        onClick={(e) => {
          setissuccess(!issuccess);
        }}
      >
        Change to success
      </button>
      {!issuccess ? <h1>Red</h1> : <h1>Green</h1>}

      <div
        className={`modal ${ismodalopen ? "" : "d-none"} ${
          issuccess ? "success" : "danger"
        }`}
      >
        <h2>{issuccess ? "Successbox" : "Dangerbox"}</h2>
        <p>{issuccess ? "This was successful." : "This was not successful."}</p>
        <button
          onClick={(e) => {
            setismodalopen(false);
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default App;
