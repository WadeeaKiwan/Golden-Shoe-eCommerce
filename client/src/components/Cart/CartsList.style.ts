import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  toolbar: theme.mixins.toolbar,
  title: {
    paddingTop: "0.5em",
    paddingBottom: "0.5em"
  },
  noItems: {
    paddingTop: "5em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& a": {
      marginTop: "1em",
      borderRadius: 0
    }
  },
  content: {},
  cartDetails: {
    display: "flex",
    justifyContent: "flex-end"
  },
  cartActions: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "1em",
    "& button": {
      marginRight: "1em",
      borderRadius: 0
    },
    "& a": {
      borderRadius: 0
    }
  }
}));
