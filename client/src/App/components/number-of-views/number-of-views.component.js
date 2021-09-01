import React from "react";
import Typography from "@material-ui/core/Typography";

const NumberOfViews = ({ numberOfViews }) => {
  return (
    <Typography variant="body2" color="textSecondary" component="p">
      number of views {numberOfViews}
    </Typography>
  );
};

export default NumberOfViews;
