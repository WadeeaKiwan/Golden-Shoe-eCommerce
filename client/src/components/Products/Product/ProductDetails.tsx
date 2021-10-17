import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Product } from "@chec/commerce.js/types/product";
import { commerce } from "../../../lib/commerce";

import { Button, Container, Grid, Typography, Avatar } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./ProductDetails.style";

const ProductDetails: React.FC = () => {
  const [product, setProduct] = useState<Product>();
  const { id }: { id: string } = useParams();

  const classes = useStyles();

  const fetchProduct = async (id: string) => {
    const product = await commerce.products.retrieve(id);
    console.log(product);
    setProduct(product);
  };

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <Container className={classes.root}>
      <div className={classes.toolbar} />
      <Grid container justifyContent='center' spacing={6}>
        <Grid item>
          <img src={product.assets[0].url} width='400px' alt={product.name} />
          <div className={classes.assets}>
            {product.assets.map((asset) => (
              <Avatar
                key={asset.id}
                className={classes.asset}
                variant='square'
                alt={product.name}
                src={asset.url}
              />
            ))}
          </div>
        </Grid>
        <Grid item>
          <Typography variant='h4' gutterBottom>
            {product.name}
          </Typography>
          <Typography variant='body2' gutterBottom color='textSecondary'>
            {product.categories[0].name}
          </Typography>
          <Typography variant='h5' gutterBottom color='secondary'>
            {product.price.formatted_with_symbol}
          </Typography>
          <Typography variant='body1' gutterBottom color='inherit'>
            {product.inventory.available} in stock
          </Typography>
          <Typography
            variant='body2'
            dangerouslySetInnerHTML={{ __html: product.description }}
            gutterBottom
            color='textPrimary'
            component='p'
          />

          <Button
            aria-label='Add to Cart'
            variant='contained'
            color='primary'
            endIcon={<AddShoppingCart />}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
