import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    borderRadius: 0,
    marginBottom: "2em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0px 0px 15px 4px #9CA3AF",
    [theme.breakpoints.up(600)]: {
      flexDirection: "row"
    }
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    [theme.breakpoints.up(600)]: {
      width: "20%"
    }
  },
  media: {
    height: "100px",
    objectFit: "contain"
  },
  cardContent: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    flexGrow: 1,
    alignSelf: "center",
    [theme.breakpoints.up(600)]: {
      justifyContent: "space-between"
    }
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
    marginRight: "1em",
    [theme.breakpoints.up(600)]: {
      justifyContent: "space-between"
    },
    "& button": {
      minWidth: "50px",
      borderRadius: 0
    }
  }
}));
