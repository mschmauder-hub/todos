import React, { useState } from "react";
import "./addResourceScreen.css";
import { useHistory } from "react-router-dom";
import { addResource } from "../api/resources";

const AddResource = () => {
  const [topic, setTopic] = useState("");
  const [resource, setResource] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let history = useHistory();

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();

    setError(false);
    try {
      await addResource(resource, topic);
    } catch (error) {
      setError(true);
    }
    setLoading(false);

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
        <input
          type="submit"
          value="Submit"
          disabled={!topic || !resource || loading}
        />
      </form>
    </div>
  );
};

export default AddResource;
