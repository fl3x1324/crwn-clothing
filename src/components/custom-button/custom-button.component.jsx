import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, googleSignIn, ...props }) => (
  <button
    className={`${googleSignIn ? "google-signin" : ""} custom-button`}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;
