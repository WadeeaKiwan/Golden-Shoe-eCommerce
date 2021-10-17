import { Product } from "@chec/commerce.js/types/product";

import { Grid } from "@material-ui/core";
import useStyles from "./ProductsList.style";

import ProductItem from "./Product/ProductItem";

type Props = {
  products: Product[];
};

const ProductsList: React.FC<Props> = ({ products }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default ProductsList;
