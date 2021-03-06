import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ items, title }) => (
  <div className={"collection-preview"}>
    <h1 className={"title"}>{title.toUpperCase()}</h1>
    <div className={"preview"}>
      {items
        .filter((_, idx) => idx < 4)
        .map(({ id, ...rest }) => (
          <CollectionItem key={id} {...rest} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
