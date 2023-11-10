import React, { useRef } from "react";
import Card from "../UI/Card";
import Input from "../UI/Input";

const AddShoes = (props) => {
  const nameInputRef = useRef();
  const desctiptionInputRef = useRef();
  const priceInputRef = useRef();
  const largeInputRef = useRef();
  const mediumInputRef = useRef();
  const smallInputRef = useRef();

  const addShoesHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredDescription = desctiptionInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredLargeShoes = largeInputRef.current.value;
    const enteredMediumShoes = mediumInputRef.current.value;
    const enteredSmallShoes = smallInputRef.current.value;

    props.onAddShoes(
      enteredName,
      enteredDescription,
      enteredPrice,
      enteredLargeShoes,
      enteredMediumShoes,
      enteredSmallShoes
    );

    nameInputRef.current.value = '';
    desctiptionInputRef.current.value = '';
    priceInputRef.current.value = '';
    largeInputRef.current.value = '';
    mediumInputRef.current.value = '';
    smallInputRef.current.value = '';
  };

  return (
    <Card>
      <form onSubmit={addShoesHandler}>
        <Input
          ref={nameInputRef}
          label="Brand Name"
          input={{ type: "text", id: "brand" }}
        />
        <Input
          ref={desctiptionInputRef}
          label="Description"
          input={{ type: "text", id: "description" }}
        />
        <Input
          ref={priceInputRef}
          label="Price"
          input={{ type: "number", id: "price" }}
        />
        <Input
          ref={largeInputRef}
          label="L"
          input={{ type: "text", id: "large" }}
        />
        <Input
          ref={mediumInputRef}
          label="M"
          input={{ type: "text", id: "medium" }}
        />
        <Input
          ref={smallInputRef}
          label="S"
          input={{ type: "text", id: "small" }}
        />
        <button>ADD</button>
      </form>
    </Card>
  );
};

export default AddShoes;
