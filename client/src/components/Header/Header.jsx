import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
import { useDispatch, useSelector } from "react-redux";

import "./Header.scss";
import { changeScrollValue } from "../../store/Slices";
import { changeShowCartValue } from "../../store/Slices";
import { changeShowSearchValue } from "../../store/Slices";

const Header = () => {
  const dispatch = useDispatch();
  const scroll = useSelector((state) => state.slices.pageScroll);
  const showCart = useSelector((state) => state.slices.showCart);
  const showSearch = useSelector((state) => state.slices.showSearch);

  const { cartCount } = useContext(Context);

  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      dispatch(changeScrollValue(true));
    } else {
      dispatch(changeScrollValue(false));
    }
  };

  const setShowCart = () => {
    dispatch(changeShowCartValue());
  };

  const setShowSearch = () => {
    dispatch(changeShowSearchValue(true));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCategoriesClick = () => {
    const categoriesSection = document.getElementById("categories-section");
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className={`main-header ${scroll ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={handleAboutClick}>About</li>
            <li onClick={handleCategoriesClick}>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            ECOM STORE
          </div>
          <div className="right">
            <TbSearch onClick={setShowSearch} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={setShowCart}>
              <CgShoppingCart />
              {cartCount !== 0 ? <span>{cartCount}</span> : ""}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
