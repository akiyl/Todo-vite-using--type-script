import React, { useState } from "react";

interface TodoContainerProps {
  todoList: string[];
}
const TodoContainer = ({ todoList }: TodoContainerProps) => {
  // const arr = [todoList];
  // const [TotalTask, setTotalTask] = useState<number>(0);
  const onDelete = (e: any) => {
    console.log(e.target.index);
  };
  return (
    <div className="Todo-container">
      {todoList.length > 0
        ? todoList.map((tasks, index) => {
            return (
              <div key={index} className="">
                {tasks}
                <button className="delete-btn" onClick={onDelete}>
                  {" "}
                  delete
                </button>
                {/* {console.log(arr)} */}
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default TodoContainer;
