import React from "react";

import classes from "./AvailableShoes.module.css";
import Card from "../UI/Card";
import ShoesItem from "./ShoesItems/ShoesItem";


// const DUMMY_SHOES = [
//   {
//     id: "s1",
//     name: "Rebook",
//     description: "Pure Cotton",
//     price: 22.99,
//   },
//   {
//     id: "s2",
//     name: "WoodLand",
//     description: "Leather",
//     price: 16.5,
//   },
// ];

const AvailableShoes = (props) => {
  const shoesList = props.shoes.map((shoe) => (
    <ShoesItem
      key={shoe.id}
      id={shoe.id}
      name={shoe.name}
      price={shoe.price}
      description={shoe.description}
      large={shoe.large}
      medium={shoe.medium}
      small={shoe.small}
    />
  ));
  return (
    <section className={classes.shoes}>
      <Card>
        <ul>{shoesList}</ul>
      </Card>
    </section>
  );
};

export default AvailableShoes;
