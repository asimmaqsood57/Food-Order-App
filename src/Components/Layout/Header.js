import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>

        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="delecious food" />
      </div>
    </>
  );
};

export default Header;
