import React from "react";
import Button from "./Button";

function ButtonList() {
  const list = ["All", "Gaming", "Live", "Shorts", "Move", "Music", "Phone"];
  return (
    <div className="flex gap-2">
      {list.map((e, i) => {
        // console.log(e);
        return (
          <button key={e.i} className="bg-gray-300 px-4 py-2 rounded-lg m-1">
            {e}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonList;
