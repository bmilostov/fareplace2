import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import Menu from "../menu/menu.component";
import { MenuLink } from "../menu/menu.styles";

const Header = () => {
  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <MenuLink to="/">FAREPLACE</MenuLink>
        <Menu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
