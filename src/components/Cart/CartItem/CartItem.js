import React  from "react";
import "./CartItem.css";

const CartItem = ({ item }) => {
  return (
    <div className="cartItem">
      <div className="cartItem__details">
        <p className="details__title">{item.title}</p>
        <p className="details__desc">{item.description}</p>
      </div>      
    </div>
  );
};

export default CartItem;
