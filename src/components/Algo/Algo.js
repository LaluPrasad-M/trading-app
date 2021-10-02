import React from "react";
import "./Algo.css";
import { connect } from "react-redux";
import { addToCart } from "../../Redux/Bot/Bot-actions";

const Algo = ({ current, addToCart }) => {
  return (
    <div className="Algo">
      <div className="Algo__details">
        <p className="details__title">{current.title}</p>
        <p className="details__description">{current.description}</p>
        <br></br>
        <button className="details__btn">MODERATE RISK</button>
        <button
          onClick={() => addToCart(current.id)}
          className="details__addBtn"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Algo);
