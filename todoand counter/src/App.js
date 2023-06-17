// import React, { useEffect, useState } from "react";
import "./App.css";
// import CallApi from "./CallApi";
// import Counter from "./Counter1";
import Form from "./Form";
import LearnTodo from "./LearnTodo1";
import { Counter } from "./features/counter/counter";
import Todo from "./features/todo/todo";

function App() {
  return (
    <div className="App">
      {/* <CallApi /> */}
      {/* <Counter /> */}
      <Form />
      <LearnTodo />
      <Counter />
      <Todo />
    </div>
  );
}

export default App;
