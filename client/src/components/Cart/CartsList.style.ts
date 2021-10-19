import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  toolbar: theme.mixins.toolbar,
  title: {
    paddingBottom: "0.5em"
  },
  noItems: {
    paddingTop: "5em"
  },
  content: {}
}));
