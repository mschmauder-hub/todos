import React from "react";
import "./listItemIcon.css";

const ListItemIcon = ({ imgSrc, alt }) => {
  return <img className="listItem__icon" src={imgSrc} alt={alt}></img>;
};

export default ListItemIcon;
