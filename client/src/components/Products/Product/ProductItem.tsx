import { Link } from "react-router-dom";

import { Product } from "@chec/commerce.js/types/product";

import { Card, CardMedia, CardContent, CardActionArea, Typography } from "@material-ui/core";
import useStyles from "./ProductItem.style";

type Props = {
  product: Product;
};

const ProductItem: React.FC<Props> = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={product.conditionals?.is_sold_out ? classes.soldOut : classes.root}>
      <CardActionArea
        component={Link}
        to={`/product/${product.id}`}
        disabled={product.conditionals?.is_sold_out}
      >
        <CardMedia
          className={classes.media}
          component='img'
          image={product.image?.url}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant='h5' gutterBottom>
              {product.name}
            </Typography>
            <Typography variant='h5' color='secondary'>
              {product.conditionals?.is_sold_out
                ? "SOLD OUT!"
                : product.price.formatted_with_symbol}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductItem;
