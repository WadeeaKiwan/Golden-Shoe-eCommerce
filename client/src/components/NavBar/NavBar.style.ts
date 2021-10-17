import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolBar: {
    display: "flex",
    justifyContent: "space-between"
  },
  logo: {
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "center",
    textDecoration: "none",
    color: "#CCB387",
    fontFamily: "cursive, sans-serif",
    "& img": {
      height: "50px",
      paddingBottom: "15px"
    }
  },
  button: {}
}));
