import React, { useEffect, useState } from "react";
import "./resources.css";
import List from "../components/List/List";
import ListItem from "../components/List/ListItem";
import ListItemText from "../components/List/ListItemText";
import ListItemIcon from "../components/List/ListItemIcon";
import { getResources, deleteResource } from "../api/resources";
import { useHistory, Link } from "react-router-dom";
import ListItemButton from "../components/List/ListItemButton";
import plusSrc from "../assets/plus.svg";
import minusSrc from "../assets/minus.svg";

function Resources() {
  const [resources, setResources] = useState(null);

  let history = useHistory();

  async function getResourceList() {
    const resources = await getResources();
    setResources(resources);
  }
  useEffect(() => {
    getResourceList();
  }, []);

  function handleClick() {
    history.push("/add-resource");
  }

  async function handleDelete(resource) {
    await deleteResource(resource.id);
    const newResources = resources.filter((r) => r.id !== resource.id);
    setResources(newResources);
  }

  return (
    <main className="resources">
      <List>
        {resources?.map((resource) => (
          <ListItem key={resource.id}>
            <ListItemIcon imgSrc={resource.img} />
            <ListItemText primary={resource.title} />
            <ListItemButton
              onClick={() => handleDelete(resource)}
              label="Delete"
            />
          </ListItem>
        ))}
      </List>
      <Link to="/add-resource">
        <button onClick={handleClick} className="button">
          <img className="button__image" src={plusSrc} alt="plus"></img>
        </button>
      </Link>
      <button onClick={handleClick} className="button">
        <img className="button__image" src={minusSrc} alt="plus"></img>
      </button>
    </main>
  );
}

export default Resources;
