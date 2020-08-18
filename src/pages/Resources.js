import React, { useEffect, useState } from "react";
import "./resources.css";
import List from "../components/List/List";
import ListItem from "../components/List/ListItem";
import ListItemText from "../components/List/ListItemText";
import ListItemIcon from "../components/List/ListItemIcon";
import { getResources } from "../api/resources";

function Resources() {
  const [resources, setResources] = useState(null);
  useEffect(() => {
    async function getResourceList() {
      const resources = await getResources();
      setResources(resources);
    }
    getResourceList();
  }, []);

  console.log(resources);

  return (
    <main className="resources">
      <List>
        {resources?.map((resource) => (
          <ListItem key={resource.id}>
            <ListItemIcon imgSrc={resource.img} />
            <ListItemText primary={resource.titel} />
          </ListItem>
        ))}
      </List>
    </main>
  );
}

export default Resources;
