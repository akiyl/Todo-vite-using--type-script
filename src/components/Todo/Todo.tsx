import React, { useState } from "react";
import TodoContainer from "../TodoContainer/TodoContainer";

const Todo = () => {
  const [task, setTask] = useState<string[]>([]);
  const [data, setData] = useState([""]);

  const Textdata = (e: any) => {
    e.preventDefault();
    let value = e.target.value;
    // console.log(task);
    return value;
    // arr.push(e.target.value);
  };

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault;
          console.log("uhughhghg");
          setData(Textdata);
        }}
      >
        <button> </button>
        <input
          type="text"
          placeholder="Create a new Todo"
          onChange={Textdata}
        />
      </form>
      <TodoContainer task={task} />
    </div>
  );
};

export default Todo;
