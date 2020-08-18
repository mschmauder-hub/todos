import React from "react";
import "./listItemText.css";

const ListItemText = ({ primary, secondary }) => {
  return (
    <div className="listItemText">
      <span>{primary}</span>
      <span>{secondary}</span>
    </div>
  );
};

export default ListItemText;
