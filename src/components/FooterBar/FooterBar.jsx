import React from "react";
import { Navbar } from "react-bootstrap";

const Footer = ({ items, clicked }) => {
  const qty = items.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);
  return (
    <Navbar bg="dark" sticky="bottom" >
      <p onClick={clicked} style={{ textAlign: "center", color: "white" }}>
        {qty} {qty > 1 ? "items" : "item"} in cart
      </p>
    </Navbar>
  );
};

export default Footer;
