import React from "react";
import "./Cart.css";

const Cart = ({ items }) => {
  const total = items.reduce((acc, item) => {
    return acc + item.qty * item.price;
  }, 0);
  return (
    <div className="cartWrapper">
      <h2>Cart Items</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Rate</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total Price: {total}</h4>
    </div>
  );
};

export default Cart;
