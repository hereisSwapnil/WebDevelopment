import React from "react";

export const ProductCard = (props) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "red",
          width: "200px",
          margin: "10px",
        }}
      >
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <p>{props.category}</p>
        <img src={props.image} width="100px" alt="" />
      </div>
    </>
  );
};
