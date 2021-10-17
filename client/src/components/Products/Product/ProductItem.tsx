import { Product } from "@chec/commerce.js/types/product";

import useStyles from "./ProductItem.style";

import { Card, CardMedia, CardContent, CardActionArea, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

const ProductItem: React.FC<Props> = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/product/${product.id}`}>
        <CardMedia
          className={classes.media}
          component='img'
          image={product.assets[0].url}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant='h5' gutterBottom>
              {product.name}
            </Typography>
            <Typography variant='h5'>{product.price.formatted_with_symbol}</Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductItem;
