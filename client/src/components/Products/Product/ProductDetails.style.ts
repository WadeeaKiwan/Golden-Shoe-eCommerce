import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    maxWidth: "80%",
    margin: "0 auto",
    paddingTop: "3em"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(6)
  },
  assets: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "3em"
  },
  asset: {
    marginRight: "1em",
    border: "2px solid #E5E7EB",
    borderRadius: "5px",
    padding: "2px",
    objectFit: "contain"
  }
}));
