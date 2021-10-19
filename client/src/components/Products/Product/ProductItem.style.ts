import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0px 1px 10px 5px #3f51b5"
    },
    borderRadius: 0
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
