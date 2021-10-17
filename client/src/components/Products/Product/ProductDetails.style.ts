import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    maxWidth: "80%",
    margin: "0 auto",
    paddingTop: "3em"
  },
  toolbar: theme.mixins.toolbar,
  backButton: {
    marginBottom: "3em"
  },
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(6)
  },
  headAsset: {
    height: "400px",
    width: "400px",
    objectFit: "contain"
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
    objectFit: "contain",
    height: "75px",
    width: "75px",
    "& :hover": {
      border: "2px solid #4B5563",
      borderRadius: "5px",
      padding: "2px",
      cursor: "pointer"
    }
  }
}));
