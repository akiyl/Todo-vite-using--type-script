import React, { useState } from "react";

interface TodoItem {
  id: number;
  task: string;
  status: "active" | "completed";
}
interface TodoContainerProps {
  todoList: TodoItem[];
  onToggleStatus: (taskId: number) => void;
  onDeleteTodo: (taskId: number) => void;
}
const TodoContainer: React.FC<TodoContainerProps> = ({
  todoList,
  onToggleStatus,
  onDeleteTodo,
}) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.status === "completed"}
              onChange={() => onToggleStatus(todo.id)}
            />
            {todo.task}
          </label>
          <button type="button" onClick={() => onDeleteTodo(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default TodoContainer;
