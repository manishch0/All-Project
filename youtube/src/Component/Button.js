import React from "react";

function Button({ name }) {
  return (
    <div>
      <button className="bg-gray-300 px-5 py-2 rounded-lg m-2">{name}</button>
    </div>
  );
}

export default Button;
