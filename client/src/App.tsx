import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { commerce } from "./lib/commerce";
import { Product } from "@chec/commerce.js/types/product";

import { ProductsList, NavBar, ProductDetails } from "./components";

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
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path='/' render={() => <ProductsList products={products} />} />
          <Route exact path='/product/:id' render={() => <ProductDetails />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
