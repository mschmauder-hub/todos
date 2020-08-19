import React from "react";

const ListItemButton = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default ListItemButton;
