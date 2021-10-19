import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import useStyles from "./NavBar.style";

import logo from "../../assets/golden-shoe-logo.png";

type Props = {
  totalItems: number;
};

const NavBar: React.FC<Props> = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolBar}>
          <Typography className={classes.logo} component={Link} to='/'>
            <img src={logo} alt='GoldenShoe' />
            <Typography variant='h5'>GoldenShoe</Typography>
          </Typography>
          {location.pathname !== "/cart" && (
            <IconButton aria-label='Shoe cart items' color='inherit' component={Link} to='/cart'>
              <Badge badgeContent={totalItems} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
