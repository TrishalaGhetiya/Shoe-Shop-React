import React, { useState } from "react";
import AvailableShoes from "./AvailableShoes";
import AddShoes from "./AddShoes";

const Shoes = () => {
  const [shoesList, setShoesList] = useState([]);

  const addShoesHandler = (
    sName,
    sDescription,
    sPrice,
    sLarge,
    sMedium,
    sSmall
  ) => {
    setShoesList((prevShoesList) => {
        const updatedShoesList = [...prevShoesList];
        updatedShoesList.unshift({
            name: sName,
            description: sDescription,
            price: sPrice,
            large:sLarge,
            medium:sMedium,
            small:sSmall,
            id:Math.random().toString()
        })
        return updatedShoesList;
    })
  };

  return (
    <>
      <AddShoes onAddShoes={addShoesHandler} />
      <AvailableShoes shoes={shoesList} />
    </>
  );
};

export default Shoes;
