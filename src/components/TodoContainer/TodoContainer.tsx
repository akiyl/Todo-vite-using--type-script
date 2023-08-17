import React from "react";
import "./TodoCotainer.css";

interface TodoItem {
  id: number;
  task: string;
  status: "active" | "completed";
}

interface TodoContainerProps {
  todoList: TodoItem[];
  setTodoList: any;
  setSelectedStatus: any;
  theme: string;
  onToggleStatus: (taskId: number) => void;
  onDeleteTodo: (taskId: number) => void;
}
//reference for drags

// sort array

// const handleDragEnd = (e: React.DragEvent<HTMLLIElement>) => {};
const TodoContainer: React.FC<TodoContainerProps> = ({
  todoList,
  setTodoList,
  setSelectedStatus,
  onToggleStatus,
  onDeleteTodo,
  theme,
}) => {
  const handleDragStart = (
    e: React.DragEvent<HTMLLIElement>,
    index: number
  ) => {
    e.dataTransfer.setData("text", index.toString());
  };

  const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLLIElement>, index: number) => {
    e.preventDefault();

    const fromIndex = Number(e.dataTransfer.getData("text"));
    const toIndex = index;

    const updatedTodoList = [...todoList];
    const [movedItem] = updatedTodoList.splice(fromIndex, 1);
    updatedTodoList.splice(toIndex, 0, movedItem);

    setTodoList(updatedTodoList);
  };

  return (
    <div className="todo-list">
      <ul className={`list-${theme}`}>
        {todoList.map((todo, index) => (
          <li
            className={`todo-${theme}`}
            key={todo.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, index)}
          >
            <label>
              <span className="real-check">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={todo.status === "completed"}
                  onChange={() => onToggleStatus(todo.id)}
                />
                {todo.status === "completed" && (
                  <img
                    className="check-image"
                    src="/src/components/images/icon-check.svg"
                    alt="Check Icon"
                  />
                )}
              </span>
              {todo.task}
            </label>
            <button type="button" onClick={() => onDeleteTodo(todo.id)}>
              <img
                className="cross"
                src="/src/components/images/icon-cross.svg"
                alt="CHECK ING"
              />
            </button>
          </li>
        ))}
        <li className={`status-btn-${theme}`}>
          <div className="todo-status">
            <div className={`btn-${theme}`}>{todoList.length} items left</div>
            <div className="btn-main">
              <button
                className={`btn-${theme}`}
                type="button"
                onClick={() => setSelectedStatus("all")}
              >
                All
              </button>
              <button
                className={`btn-${theme}`}
                type="button"
                onClick={() => setSelectedStatus("active")}
              >
                Active
              </button>
              <button
                className={`btn-${theme}`}
                type="button"
                onClick={() => setSelectedStatus("completed")}
              >
                Completed
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TodoContainer;
