import React, { Fragment } from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SearchIcon from "@material-ui/icons/Search";
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <Fragment>
      <div className="header">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="header__logo">
            <StorefrontIcon className="header__logoImage" fontSize="large" />
            <h2 className="header__logoTitle">eShop</h2>
          </div>
        </Link>

        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <div className="nav__item">
            <span className="nav__itemLineOne">hello guest</span>
            <span className="nav__itemLineTwo">sign in</span>
          </div>
          <div className="nav__item">
            <span className="nav__itemLineOne">your</span>
            <span className="nav__itemLineTwo">shop</span>
          </div>
          <Link to="/checkout">
            <div className="nav__itemBasket">
              <ShoppingBasketIcon />
              <span className="nav__itemLineTwo nav__basketCount">0</span>
            </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Header;
