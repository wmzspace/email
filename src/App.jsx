import React, { Component } from "react";
import toast, { Toaster } from "react-hot-toast";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.svg";
import "./App.css";



const notify = () => toast("Here is your toast.");

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>
          <button onClick={notify} className="btn">Make me a toast</button>
          <Toaster />
        </div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
