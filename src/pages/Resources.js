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
          <ListItemIcon />
          <ListItemText primary="Text more text" />
        </ListItem>
      </List>
    </main>
  );
}

export default Resources;
