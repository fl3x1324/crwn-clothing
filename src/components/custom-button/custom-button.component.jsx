import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, inverted, googleSignIn, ...props }) => (
  <button
    className={`${googleSignIn && "google-signin"} ${
      inverted && "inverted"
    } custom-button`}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;
