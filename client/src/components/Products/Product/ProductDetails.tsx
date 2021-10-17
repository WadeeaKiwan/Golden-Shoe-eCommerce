import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";

import { Product } from "@chec/commerce.js/types/product";
import { commerce } from "../../../lib/commerce";

import { Button, Container, Grid, Typography, Avatar } from "@material-ui/core";
import { AddShoppingCart, ArrowBack } from "@material-ui/icons";
import useStyles from "./ProductDetails.style";

const ProductDetails: React.FC = () => {
  const [product, setProduct] = useState<Product>();
  const [productAsset, setProductAsset] = useState<string | undefined>("");
  const { id }: { id: string } = useParams();
  const history = useHistory();

  const classes = useStyles();

  const fetchProduct = async (id: string) => {
    const product = await commerce.products.retrieve(id);
    console.log(product);
    setProduct(product);
    setProductAsset(product?.assets[0].url);
  };

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <Container className={classes.root}>
      <div className={classes.toolbar} />
      <Button
        className={classes.backButton}
        aria-label='Back'
        variant='outlined'
        color='primary'
        startIcon={<ArrowBack />}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <Grid container justifyContent='center' spacing={6}>
        <Grid item>
          <img className={classes.headAsset} src={productAsset} alt={product.name} />
          <div className={classes.assets}>
            {product.assets.map((asset) => (
              <Avatar
                variant='square'
                alt={product.name}
                src={asset.url}
                key={asset.id}
                className={classes.asset}
                onMouseOver={() =>
                  setProductAsset(product?.assets.find((el) => el.url === asset.url)?.url)
                }
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
            <strong>{product.inventory.available}</strong> in stock
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
