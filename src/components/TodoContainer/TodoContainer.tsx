import React, { useState } from "react";

interface TodoContainerProps {
  task: string[];
}
const TodoContainer = ({ task }: TodoContainerProps) => {
  const arr = [task];
  // const [TotalTask, setTotalTask] = useState<number>(0);

  return (
    <div className="Todo-container">
      {arr.length > 0
        ? arr.map((tasks, index) => {
            return (
              <div key={index} className="">
                {tasks}
                {/* {console.log(arr)} */}
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default TodoContainer;
