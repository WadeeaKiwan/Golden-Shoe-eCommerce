import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    borderRadius: 0,
    position: "relative",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0px 1px 10px 5px #3f51b5"
    },
    "&::before": {
      content: "''",
      position: "absolute",
      backgroundColor: "#3f51b5",
      zIndex: 2,
      height: "100px",
      width: "100px",
      display: "block",
      borderRadius: "50%",
      top: -50,
      left: -50
    }
  },
  soldOut: {
    opacity: 0.6
  },
  media: {
    height: "300px",
    objectFit: "contain"
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between"
  }
}));
