import React from "react";
import { SHOP_DATA } from "../../data/shop";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div>
        <h1>SHOP PAGE</h1>
      </div>
    );
  }
}

export default ShopPage;
