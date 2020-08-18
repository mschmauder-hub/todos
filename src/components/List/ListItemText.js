import React from "react";

const ListItemText = ({ primary, secondary }) => {
  return (
    <div>
      <span>{primary}</span>
      <span>{secondary}</span>
    </div>
  );
};

export default ListItemText;
