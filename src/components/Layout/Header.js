import React from "react";

import shoesImage from "../../assets/shoes1.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Shoes</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={shoesImage} alt="Fancy Shoes" />
      </div>
    </>
  );
};

export default Header;
