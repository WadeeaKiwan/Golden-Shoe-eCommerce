import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { commerce } from "./lib/commerce";
import { Product } from "@chec/commerce.js/types/product";
import { Cart } from "@chec/commerce.js/types/cart";

import { ProductsList, NavBar, ProductDetails, CartsList, Checkout, NotFound } from "./components";
// import { VariantCollection } from "@chec/commerce.js/features/products";

import { IconButton } from "@material-ui/core";
import { ChatBubble } from "@material-ui/icons";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Cart>();
  // const [variant, setVariant] = useState<VariantCollection>();

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
  };

  // const getVariants = async () => {
  //   const variants = await commerce.products.getVariants("prod_RyWOwmdA0GlnEa");

  //   setVariant(variants);
  // };

  const onAddToCart = async (productId: string, quantity: number) => {
    const response = await commerce.cart.add(productId, quantity);

    setCart(response.cart);
  };

  const onUpdateCart = async (cartItemId: string, quantity: number) => {
    const response = await commerce.cart.update(cartItemId, { quantity });

    setCart(response.cart);
  };

  const onRemoveFromCart = async (cartItemId: string) => {
    const response = await commerce.cart.remove(cartItemId);

    setCart(response.cart);
  };

  const onEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const inCart = (productId: string) => {
    const isInCart = cart?.line_items.some((cartItem) => cartItem.product_id === productId);

    return isInCart;
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
    // getVariants();
  }, []);

  // console.log({ variant });

  return (
    <Router>
      <div className='App'>
        <NavBar totalItems={cart?.total_items || 0} />
        <Switch>
          <Route exact path='/' render={() => <ProductsList products={products} />} />
          <Route
            exact
            path='/product/:id'
            render={() => <ProductDetails onAddToCart={onAddToCart} inCart={inCart} />}
          />
          <Route
            exact
            path='/cart'
            render={() =>
              cart && (
                <CartsList
                  cart={cart}
                  onUpdateCart={onUpdateCart}
                  onRemoveFromCart={onRemoveFromCart}
                  onEmptyCart={onEmptyCart}
                />
              )
            }
          />
          <Route exact path='/checkout' render={() => <Checkout />} />
          <Route component={NotFound} />
        </Switch>
        <IconButton aria-label='Chat' className='chat-icon'>
          <ChatBubble fontSize='large' />
        </IconButton>
      </div>
    </Router>
  );
};

export default App;
