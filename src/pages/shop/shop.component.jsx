import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { SHOP_DATA } from "../../data/shop";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className={"shop-page"}>
        {collections
          .filter((_, idx) => idx < 4)
          .map(({ id, ...rest }) => (
            <CollectionPreview key={id} {...rest} />
          ))}
      </div>
    );
  }
}

export default ShopPage;
