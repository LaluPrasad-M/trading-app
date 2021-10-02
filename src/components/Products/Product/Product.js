import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
}
from "../../../Redux/Bot/Bot-actions";

const Product = ({ botsdetails, addToCart, loadCurrentItem }) => {
  return (
    <div className="botsdetails">
       <div className="botsdetailsDetails">
        <div className="details__title">{botsdetails.title}</div>
        
      </div>
      <div className="details__index">Index Value<br></br>{botsdetails.index}</div>
      <div className="details__cagr">CAGR<br></br>{botsdetails.cagr}%</div>

      <div className="botsdetails__buttons">
        <Link to={"/botsdetails/"+botsdetails.id}>
          <button
            onClick={() => loadCurrentItem(botsdetails)}
            className="buttons__btn buttons__view"
          >
            View algo
          </button>
        </Link>
        <button
          onClick={() => addToCart(botsdetails.id)}
          className="buttons__btn buttons__add"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);