import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    // "&:hover": {},
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
