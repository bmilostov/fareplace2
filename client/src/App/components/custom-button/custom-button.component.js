import React from "react";
import { CusomButtonContainer} from './custom-button.styles'

const CustomButton = ({ children, ...props }) => {
  return <CusomButtonContainer className="custom_button" variant="contained" {...props}>{children}</CusomButtonContainer>;
};

export default CustomButton;
