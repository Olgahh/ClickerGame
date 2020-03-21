import React, { Component } from "react";
import "./App.css";
import UpgradeStore from "./UpgradeStore";
class App extends Component {
  state = {
    perClick: 1,
    currency: 0
  };

  getIncrement = () => {
    const oldCurrency = this.state.currency;
    const perClick = this.state.perClick;
    this.setState({ currency: oldCurrency + perClick });
  };

  purchasedUpgrade = (cost, multiplier) => {
    const oldCurrency = this.state.currency;
    const oldPerClick = this.state.perClick;
    this.setState({
      currency: oldCurrency - cost,
      perClick: oldPerClick * multiplier
    });
  };

  render() {
    return (
      <div className="App container-fluid bg-dark">
        <div className="container  my-5">
          <div class="d-flex flex-column bd-highlight mb-3 justify-content-center ">
            <h1
              className="display-1"
              style={{ backgroundColor: "blue", color: "white" }}
            >
              {this.state.currency}
            </h1>
            <button
              className="btn btn-warning btn-block btn-rounded mb-2"
              onClick={this.getIncrement}
              style={{ color: "white" }}
            >
              Add {this.state.perClick}
            </button>
            <UpgradeStore
              currency={this.state.currency}
              purchasedUpgrade={this.purchasedUpgrade}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// view-source:https://orteil.dashnet.org/cookieclicker/
