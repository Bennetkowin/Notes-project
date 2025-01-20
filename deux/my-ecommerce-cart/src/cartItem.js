import React, { useState } from "react";

const CartItem = ({ item, removeItem, updateQuantity }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div>
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
      />
      <button onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
