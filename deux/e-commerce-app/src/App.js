import React, { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: "T-Shirt", price: 20 },
    { id: 2, name: "Jeans", price: 40 },
    { id: 3, name: "Sneakers", price: 60 },
    { id: 4, name: "Hat", price: 15 },
    { id: 5, name: "Socks", price: 5 },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple E-Commerce Cart</h1>
      </header>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
