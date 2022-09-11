import React from "react";
import "./Header.css";

const Header = ({ text }) => {
  return (
    <div className='header-container'>
      <p>{text}</p>
    </div>
  );
};

Header.defaultProps = {
  text: "Feedback UI",
};

export default Header;
