import { Box, CircularProgress } from "@material-ui/core";

const Spinner = () => {
  return (
    <Box sx={{ display: "flex" }} style={{ position: "absolute", top: "50%", left: "50%" }}>
      <CircularProgress color='primary' />
    </Box>
  );
};

export default Spinner;
