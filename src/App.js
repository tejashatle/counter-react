import React, { Component } from "react";
import FirstComponent from "./components/learning-examples/FirstComponent";
import SecondComponent from "./components/learning-examples/SecondComponent";
import Counter from "./components/Counter/Counter";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

class LearningComponent extends Component {
  render() {
    return (
      <div className="learningComponent">
        Hello World
        <FirstComponent></FirstComponent>
        <SecondComponent />
      </div>
    );
  }
}

export default App;
