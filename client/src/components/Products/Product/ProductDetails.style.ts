import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    maxWidth: "80%",
    margin: "0 auto",
    paddingTop: "3em"
  },
  toolbar: theme.mixins.toolbar,
  backButton: {
    marginBottom: "3em",
    borderRadius: 0
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
    padding: "2px",
    objectFit: "contain",
    height: "75px",
    width: "75px",
    "&:hover": {
      border: "2px solid #4B5563",
      padding: "2px",
      cursor: "pointer"
    }
  },
  colorContainer: {
    display: "flex",
    marginBottom: "0.35em"
  },
  colorOptionsContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "1em"
  },
  colorOption: {
    width: "25px",
    height: "25px",
    marginRight: "5px",
    borderRadius: "50%",
    padding: "5px",
    border: "2px solid #E5E7EB"
  },
  sizeContainer: {},
  sizeOptionsContainer: {
    display: "flex",
    flexWrap: "wrap"
  },
  sizeOption: {
    padding: "10px",
    margin: "0 5px 5px 0",
    border: "2px solid #E5E7EB",
    "&:hover": {
      border: "2px solid #4B5563",
      cursor: "pointer"
    }
  },
  addToCartButton: {
    borderRadius: 0
  },
  relatedProductsHead: {
    paddingTop: "2em",
    borderBottom: "2px solid #E5E7EB"
  },
  relatedProductsContainer: {
    paddingTop: "3em",
    paddingBottom: "2em",
    "& > div": {
      width: "300px",
      marginRight: "2em"
    }
  }
}));
