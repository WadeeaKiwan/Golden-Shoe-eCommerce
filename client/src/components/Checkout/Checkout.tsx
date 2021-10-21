import { Paper, Typography } from "@material-ui/core";
import useStyles from "./Checkout.style";

const Checkout = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.container}>
        <Paper className={classes.paper}>
          <Typography variant='h5' align='center' gutterBottom>
            Checkout
          </Typography>
          <Typography component='p' variant='body1' align='center'>
            Your order is placed successfully
          </Typography>
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
