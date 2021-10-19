import Spinner from "../Layout/Spinner";
import CartItem from "./CartItem/CartItem";

import { Container, Typography } from "@material-ui/core";
import useStyles from "./CartsList.style";

import { Cart } from "@chec/commerce.js/types/cart";

type Props = {
  cart: Cart;
  onUpdateCart: (productId: string, quantity: number) => Promise<void>;
};

const CartsList: React.FC<Props> = ({ cart, onUpdateCart }) => {
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
      </div>
    </>
  ) : (
    <Container className={classes.root}>
      <div className={classes.toolbar} />
      <Typography variant='h4' gutterBottom className={classes.title}>
        Your Shopping Cart
      </Typography>
      {cart.line_items.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} onUpdateCart={onUpdateCart} />
      ))}
    </Container>
  );
};

export default CartsList;
