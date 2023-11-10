import React, { useContext } from "react";

import classes from "./ShoesItem.module.css";
import CartContext from "../../../store/cart-context";

const ShoesItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addLargeShoesToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: 1,
      size: 'Large'
    });
  };

  return (
    <li className={classes.shoe}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <button onClick={addLargeShoesToCartHandler}>
          Large ({props.large})
        </button>
        <button>Medium ({props.medium})</button>
        <button>Small ({props.small})</button>
      </div>
    </li>
  );
};

export default ShoesItem;
