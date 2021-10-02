import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import { connect } from "react-redux";

const Header = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className="navbar">
      <Link to="/">
        <h2 className="navbar__logo">Dashboard</h2>
      </Link>
      <Link to="/cart">
        <div className="navbar__cart">
          <h3 className="cart__title">Cart</h3>
          <div className="cart__counter">{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Header);
