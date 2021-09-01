import React from "react";
import Typography from "@material-ui/core/Typography";


const FromTo = ({ from, to }) => {
  return (
    <Typography gutterBottom variant="h5" component="h2" color="secondary">
      {from} - {to}
    </Typography>
  );
};

export default FromTo;
