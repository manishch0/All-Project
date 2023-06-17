import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const addData = () => {
    if (name.trim() !== "") {
      setData([...data, name]);
      setName("");
    }
  };

  const handleDelete = (index) => {
    const DeleteValue = data.filter((_,i) => i !== index);
    setData(DeleteValue);
  };
  return (
    <div>
      <label>Name</label>
      <input value={name} onChange={handleChange} />
      <h2>{name}</h2>
      <button onClick={addData}>Add</button>
      <ul>
        {data.map((e, index) => (
          <li key={index}>
            {e}
            <button onClick={()=>handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Form;
