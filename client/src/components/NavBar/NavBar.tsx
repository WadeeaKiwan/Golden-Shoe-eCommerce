import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import useStyles from "./NavBar.style";

import logo from "../../assets/golden-shoe-logo.png";

const NavBar: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolBar}>
          <Typography className={classes.logo} component={Link} to='/'>
            <img src={logo} alt='GoldenShoe' />
            <Typography variant='h5'>GoldenShoe</Typography>
          </Typography>
          <div className={classes.button}>
            <IconButton aria-label='Shoe cart items' color='inherit' component={Link} to='/cart'>
              <Badge badgeContent={3} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
