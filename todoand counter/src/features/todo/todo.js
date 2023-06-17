import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData } from "./todoSlice";

function Todo() {
  const data = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [edit, setEdit] = useState(null);

  const handleChange = () => {
    if (name.trim() !== "") {
      dispatch(addData({ id: Date.now(), text: name }));
      setName("");
    }
  };
  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };
  const handleEdit = () => {
    dispatch();
  };
  return (
    <div>
      <label>Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={edit !== null ? handleSave : handleChange}>
        {edit !== null ? "Save Data" : "Add data"}
      </button>
      <ul>
        {data.map((e) => (
          <li key={e.id}>
            {/* {(<input/>):(todo.text)} */}
            {edit === e.id ? (
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
              />
            ) : (
              e.text
            )}
            {edit === e.id ? (
              <button onClick={handleSaveTodo}>Save</button>
            ) : (
              <button onClick={() => handleEditTodo(e.id)}>Edit</button>
            )}
         <button onClick={() => handleDelete(e.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
