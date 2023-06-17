import React, { useEffect, useState } from "react";
import axios from "axios";

function CallApi() {
  const [id, setId] = useState("");
  console.log(id, "check id");
  const [error, setError] = useState("");

  const [data1, setData1] = useState([]);
  console.log(data1, "check data");
  const fetchData = () => {
    const url = `https://reqres.in/api/users/${id}`;
    axios.get(url).then((res) => {
      setData1(res?.data);
    });
  };
  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 1 && Number(value) <= 10)) {
      setId(value);
      setError("");
    } else {
      setError("value enter between 1 to 10");
    }
  };
  return (
    <div>
      <input type="text" value={id} onChange={handleChange} />
      {error && <p>{error}</p>}
      <button onClick={fetchData}>Fetch data</button>
      {Object.values(data1).map((e) => {
        console.log(e);
        return (
          <div>
            <input value={e.email} />
            <input value={e.first_name} />
            <input value={e.last_name} />
            <img src={e.avatar} />
          </div>
        );
      })}
    </div>
  );
}

export default CallApi;
