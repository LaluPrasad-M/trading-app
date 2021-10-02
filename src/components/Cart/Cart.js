import React from "react";
import "./Cart.css";
import { connect } from "react-redux";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
 return (
    <div className="cart">
      <div className="cart__items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
     </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);