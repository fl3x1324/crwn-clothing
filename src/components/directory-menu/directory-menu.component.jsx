import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory-menu.styles.scss";
import catData from "../../data/categories.json";

class DirectoryMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: catData,
    };
  }

  render() {
    return (
      <div className={"directory-menu"}>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;
