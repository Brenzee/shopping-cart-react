import React, { useState } from "react";
import "./Productcard.css";

const Productcard = (props) => {
  const [cart, setCart] = useState([]);

  return (
    <div className="product">
      <h3>{props.title}</h3>
      <h4>${props.price}</h4>
      <img src={props.image} alt={props.title} />
      <button onClick={props.onClick}>{props.button}</button>
    </div>
  );
};

export default Productcard;
