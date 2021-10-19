import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    borderRadius: 0,
    marginBottom: "2em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    boxShadow: "0px 0px 15px 4px #9CA3AF"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "20%"
  },
  media: {
    height: "100px",
    objectFit: "contain"
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    flexGrow: 1,
    alignSelf: "center"
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "1em",
    "& button": {
      minWidth: "50px",
      borderRadius: 0
    }
  }
}));
