import React from "react";
import "./Header.css";
import LanguageIcon from "@material-ui/icons/Language";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" />
        <SearchIcon></SearchIcon>
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon></LanguageIcon>
        <ExpandMoreIcon></ExpandMoreIcon>
        <Avatar></Avatar>
      </div>
    </div>
  );
};

export default Header;
