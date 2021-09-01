import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {MenuLink} from './menu.styles'

const Menu = () => {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText >
            <MenuLink to="/auctions">Auctions</MenuLink>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default Menu;
