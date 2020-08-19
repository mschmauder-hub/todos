import React, { useEffect, useState } from "react";
import "./resources.css";
import List from "../components/List/List";
import ListItem from "../components/List/ListItem";
import ListItemText from "../components/List/ListItemText";
import ListItemIcon from "../components/List/ListItemIcon";
import { getResources, deleteResource } from "../api/resources";
import { useHistory } from "react-router-dom";
import ListItemButton from "../components/List/ListItemButton";

function Resources() {
  const [resources, setResources] = useState(null);

  let history = useHistory();

  async function getResourceList() {
    const resources = await getResources();
    setResources(resources);
    console.log("Set Resource");
  }
  useEffect(() => {
    getResourceList();
  }, []);

  function handleClick() {
    history.push("/add-resource");
  }

  function handleDelete(resource) {
    deleteResource(resource.id)
      .then(getResourceList())
      .then(console.log("get Resource"));

    console.log("Test");
  }

  console.log("Render");

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
      <button onClick={handleClick}>Add new resource</button>
    </main>
  );
}

export default Resources;
