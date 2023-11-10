import React, { useContext } from "react";

import classes from "./ShoesItem.module.css";
import ShoesItemAdd from './ShoesItemAdd'

const ShoesItem = (props) => {
  //const cartCtx = useContext(CartContext);
  const price = props.price.toFixed(2);
//   const addToCartHandler = (amount) => {
//     cartCtx.addItem({
//       id: props.id,
//       name: props.name,
//       amount: amount,
//       price: props.price
//     })
//   };

  return (
    <li className={classes.shoe}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ShoesItemAdd />
      </div>
    </li>
  );
};

export default ShoesItem;
