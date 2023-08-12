import { useState, useEffect } from "react";
import TodoContainer from "../TodoContainer/TodoContainer";

const Todo = () => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodoList(JSON.parse(storedTodos));
    }
  }, []);

  const clearBtn = () => {
    localStorage.clear();
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the new task is empty
    if (newTask.trim() === "") {
      return; // Return early if no task
    }

    // Create a copy of the existing todo list and add the new task to it
    const updatedTodoList = [...todoList, newTask];

    // Update the todo list
    setTodoList(updatedTodoList);

    // Store the updated todo list in local storage
    localStorage.setItem("todos", JSON.stringify(updatedTodoList));

    // Reset the new task input
    setNewTask("");

    console.log(localStorage);
    console.log(newTask);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a todo"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add Todo</button>
        <button onClick={clearBtn}>clear </button>
      </form>
      <TodoContainer todoList={todoList} />
    </div>
  );
};
export default Todo;
