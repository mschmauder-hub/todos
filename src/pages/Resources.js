import React from "react";
import "./resources.css";
import List from "../components/List/List";
import ListItem from "../components/List/ListItem";
import ListItemText from "../components/List/ListItemText";
import ListItemIcon from "../components/List/ListItemIcon";

function Resources() {
  return (
    <main className="resources">
      <List>
        <ListItem>
          <ListItemIcon imgSrc="https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png" />
          <ListItemText primary="Javascript Info" />
        </ListItem>
      </List>
    </main>
  );
}

export default Resources;
