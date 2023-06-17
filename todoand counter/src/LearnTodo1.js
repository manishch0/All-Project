import React, { useState } from "react";

function LearnTodo() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleAdd = () => {
    if (name.trim() !== "") {
      setData([...data, name]);
      setName("");
    }
  };
  return (
    <div>
      <input value={name} onChange={handleChange} />
      <button onClick={handleAdd}>Add detalis</button>
      <h1>{name}</h1>
      <ul>
        {data.map((e, index) => (

          <li key={index}>{e}</li>
        )
        )}
      </ul>
    </div>
  );
}

export default LearnTodo;
