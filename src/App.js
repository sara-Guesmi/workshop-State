import "./App.css";
import React, { Component } from "react";
import Counter from "./Components/Counter/Counter";
import { Button } from "react-bootstrap";
class App extends Component {
  state = {
    show: false,
    date: 0,
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: this.state.date + 1 });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <Button variant="secondary" onClick={this.toggleShow}>
          {this.state.show ? "Hide" : "Show"}
        </Button>
        {this.state.show && <Counter />}
        <h3>{this.state.date}</h3>
      </div>
    );
  }
}

export default App;
