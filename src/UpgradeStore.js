import React from "react";

//Component
import UpgradeButton from "./UpgradeButton";

//upgradesData
import upgrades from "./data";

const UpgradeStore = props => {
  const upgradeList = upgrades.map(upgrade => (
    <UpgradeButton
      currency={props.currency}
      upgrade={upgrade}
      purchasedUpgrade={props.purchasedUpgrade}
    />
  ));
  return <div>{upgradeList}</div>;
};

export default UpgradeStore;
