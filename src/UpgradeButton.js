import React, { Component } from "react";

class UpgradeButton extends Component {
  state = {
    purchased: false
  };

  theHandlerOfTheClicking = () => {
    const upgrade = this.props.upgrade;
    this.setState({ purchased: true });
    this.props.purchasedUpgrade(upgrade.cost, upgrade.multiplier);
  };

  render() {
    const upgrade = this.props.upgrade;
    return (
      <div>
        {this.props.currency >= upgrade.cost && !this.state.purchased ? (
          <button
            className="btn btn-outline-primary btn-light btn-block btn-rounded mb-2"
            onClick={this.theHandlerOfTheClicking}
          >
            x {upgrade.multiplier} is your increment ({upgrade.cost})
          </button>
        ) : null}
      </div>
    );
  }
}

export default UpgradeButton;
