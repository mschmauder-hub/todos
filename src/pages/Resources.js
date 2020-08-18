import React, { useEffect, useState } from "react";
import "./resources.css";
import List from "../components/List/List";
import ListItem from "../components/List/ListItem";
import ListItemText from "../components/List/ListItemText";
import ListItemIcon from "../components/List/ListItemIcon";
import { getResources, addResource } from "../api/resources";
import { useHistory } from "react-router-dom";

function Resources() {
  const [resources, setResources] = useState(null);
  const [addResources, setAddResources] = useState(false);

  let history = useHistory();
  useEffect(() => {
    async function getResourceList() {
      const resources = await getResources();
      setResources(resources);
    }
    getResourceList();
    // setAddResources(false);
  }, [addResources]);

  async function handleClick() {
    // addResource().then(setAddResources(true));
    history.push("/add-resource");
  }

  console.log(resources);

  return (
    <main className="resources">
      <List>
        {resources?.map((resource) => (
          <ListItem key={resource.id}>
            <ListItemIcon imgSrc={resource.img} />
            <ListItemText primary={resource.title} />
          </ListItem>
        ))}
      </List>
      <button onClick={handleClick}>Add new resource</button>
    </main>
  );
}

export default Resources;
