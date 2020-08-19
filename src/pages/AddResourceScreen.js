import React, { useState } from "react";
import "./addResourceScreen.css";
import { useHistory } from "react-router-dom";
import { addResource } from "../api/resources";

const AddResource = () => {
  const [topic, setTopic] = useState("");
  const [resource, setResource] = useState("");

  let history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    await addResource(resource, topic);
    history.push("/resources");
  }

  function handleChange(input) {
    setResource(input);
  }

  function handleSelect(select) {
    setTopic(select);
  }

  return (
    <div className="addResourceScreen">
      <form onSubmit={handleSubmit}>
        <select
          name="resource-topic"
          onChange={(event) => handleSelect(event.target.value)}
        >
          <option value="">Select</option>
          <option value={1}>React</option>
          <option value={2}>Javascript</option>
        </select>
        <input
          type="text"
          value={resource}
          onChange={(event) => handleChange(event.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddResource;
