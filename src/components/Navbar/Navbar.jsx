import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";  // Import Hamburger Icon
import CloseIcon from "@mui/icons-material/Close"; // Import Close Icon
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";



const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>NGN</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Children</Link>
          </div>
        </div>

        <div className="center">
          <Link className="link" to="/">LAMASTORE</Link>
        </div>

        <div className="right">
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{0}</span>
            </div>
          </div>
          {/* Hamburger Menu Icon */}
          <div className="menuIcon" onClick={toggleMenu}>
            {openMenu ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobileMenu ${openMenu ? "active" : ""}`}>
        <div className="item">
          <Link className="link" to="/">Homepage</Link>
        </div>
        <div className="item">
          <Link className="link" to="/">About</Link>
        </div>
        <div className="item">
          <Link className="link" to="/">Contact</Link>
        </div>
        <div className="item">
          <Link className="link" to="/">Stores</Link>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;
