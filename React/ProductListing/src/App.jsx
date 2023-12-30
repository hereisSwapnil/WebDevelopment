import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ProductCard } from "./components/ProductCard/ProductCard.jsx";

function App() {
  const products = [
    {
      title: "Product 1",
      price: 100,
      description: "This is the description for product 1",
      category: "Category 1",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Product 2",
      price: 200,
      description: "This is the description for product 2",
      category: "Category 2",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Product 3",
      price: 300,
      description: "This is the description for product 3",
      category: "Category 3",
      image: "https://via.placeholder.com/150",
    },
  ];
  return (
    <>
      {products.map((product) => (
        <ProductCard
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
        />
      ))}
    </>
  );
}

export default App;
