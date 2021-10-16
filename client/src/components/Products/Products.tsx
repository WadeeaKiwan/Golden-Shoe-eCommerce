import { Grid } from "@material-ui/core";
import useStyles from "./Products.style";

const Products: React.FC = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Grid container justifyContent='center' spacing={4}></Grid>
    </main>
  );
};

export default Products;
