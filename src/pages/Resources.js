import React, { useEffect, useState } from "react";
import "./resources.css";
import List from "../components/List/List";
import ListItem from "../components/List/ListItem";
import ListItemText from "../components/List/ListItemText";
import ListItemIcon from "../components/List/ListItemIcon";
import { getResources, deleteResource } from "../api/resources";
import { Link } from "react-router-dom";
import ListItemButton from "../components/List/ListItemButton";
import plusSrc from "../assets/plus.svg";
import minusSrc from "../assets/minus.svg";
import useAsync from "../hooks/useAsync";

function Resources() {
  // const [resources, setResources] = useState(null);
  const { data: resources, loading, error } = useAsync(getResources);

  // async function getResourceList() {
  //   const resources = await getResources();
  //   setResources(resources);
  // }
  // useEffect(() => {
  //   getResourceList();
  // }, []);

  // async function handleDelete(resource) {
  //   await deleteResource(resource.id);
  //   const newResources = resources.filter((r) => r.id !== resource.id);
  //   setResources(newResources);
  // }

  return (
    <main className="resources">
      <List>
        {error && <div>Error</div>}
        {loading && <div>Loading ...</div>}
        {resources?.map((resource) => (
          <ListItem key={resource.id}>
            <ListItemIcon imgSrc={resource.img} />
            <ListItemText primary={resource.title} />
            {/* <ListItemButton
              onClick={() => handleDelete(resource)}
              label="Delete"
            /> */}
          </ListItem>
        ))}
      </List>
      <Link to="/add-resource">
        <img className="button__image" src={plusSrc} alt="plus"></img>
      </Link>

      <img className="button__image" src={minusSrc} alt="plus"></img>
    </main>
  );
}

export default Resources;
