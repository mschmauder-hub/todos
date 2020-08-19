import React, { useState } from "react";
import "./addResourceScreen.css";

const AddResource = () => {
  const [resource, setResource] = useState("");
  const [topic, setTopic] = useState("");

  function handleChange(input) {
    setResource(input);
  }

  function handleClick() {
    console.log(topic, resource);
  }

  function handleSelect(select) {
    setTopic(select);
    console.log(select);
  }

  return (
    <div className="addResourceScreen">
      <select
        name="resource-topic"
        onChange={(event) => handleSelect(event.target.value)}
      >
        <option value="javascript">Javascript</option>
        <option value="react">React</option>
      </select>
      <input
        value={resource}
        onChange={(event) => handleChange(event.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default AddResource;
