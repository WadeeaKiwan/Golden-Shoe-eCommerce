import Spinner from "../Layout/Spinner";
import CartItem from "./CartItem/CartItem";

import { Button, Container, Typography } from "@material-ui/core";
import useStyles from "./CartsList.style";

import { Cart } from "@chec/commerce.js/types/cart";
import { Link } from "react-router-dom";

type Props = {
  cart: Cart;
  onUpdateCart: (productId: string, quantity: number) => Promise<void>;
  onRemoveFromCart: (cartItemId: string) => Promise<void>;
  onEmptyCart: () => Promise<void>;
};

const CartsList: React.FC<Props> = ({ cart, onUpdateCart, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  return !cart ? (
    <Spinner />
  ) : !cart.line_items.length ? (
    <>
      <div className={classes.toolbar} />
      <div className={classes.noItems}>
        <Typography variant='h5' align='center'>
          No Items in Cart
        </Typography>
        <Button type='button' variant='contained' color='primary' component={Link} to='/'>
          Shop now
        </Button>
      </div>
    </>
  ) : (
    <Container className={classes.root}>
      <div className={classes.toolbar} />
      <Typography variant='h5' gutterBottom className={classes.title}>
        Your Shopping Cart
      </Typography>
      <div>
        {cart.line_items.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            onUpdateCart={onUpdateCart}
            onRemoveFromCart={onRemoveFromCart}
          />
        ))}
      </div>
      <div className={classes.cartDetails}>
        <Typography variant='h5'>Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
      </div>
      <div className={classes.cartActions}>
        <Button type='button' variant='contained' color='secondary' onClick={() => onEmptyCart()}>
          Empty Cart
        </Button>
        <Button type='button' variant='contained' color='primary' component={Link} to='/checkout'>
          Checkout
        </Button>
      </div>
    </Container>
  );
};

export default CartsList;
