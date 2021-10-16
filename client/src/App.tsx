import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import Products from "./components/Products/Products";
import { Product } from "@chec/commerce.js/types/product";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className='App'>
      <h1>Golden Shoe</h1>
      <Products />
    </div>
  );
};

export default App;
