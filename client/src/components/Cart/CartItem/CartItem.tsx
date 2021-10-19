import { LineItem } from "@chec/commerce.js/types/line-item";

import useStyles from "./CartItem.style";

import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
import { Link } from "react-router-dom";

type Props = {
  cartItem: LineItem;
  onUpdateCart: (productId: string, quantity: number) => Promise<void>;
};

const CartItem: React.FC<Props> = ({ cartItem, onUpdateCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea
        component={Link}
        to={`/product/${cartItem.product_id}`}
        className={classes.container}
      >
        <CardMedia
          className={classes.media}
          component='img'
          image={cartItem.image.url}
          title={cartItem.name}
        />
      </CardActionArea>
      <CardContent className={classes.cardContent}>
        <Typography variant='h5' gutterBottom>
          {cartItem.name}
        </Typography>
        <Typography variant='h5' color='secondary'>
          {cartItem.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          type='button'
          variant='outlined'
          onClick={() => onUpdateCart(cartItem.id, cartItem.quantity - 1)}
        >
          -
        </Button>
        <Typography>&nbsp;{cartItem.quantity}&nbsp;</Typography>
        <Button
          type='button'
          variant='outlined'
          onClick={() => onUpdateCart(cartItem.id, cartItem.quantity + 1)}
        >
          +
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
