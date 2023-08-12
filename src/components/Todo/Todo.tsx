import React, { useState, useEffect } from "react";
import TodoContainer from "../TodoContainer/TodoContainer";

const Todo = () => {
  interface TodoItem {
    id: number;
    task: string;
    status: "active" | "completed";
  }

  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodoList(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const clearTodoList = () => {
    setTodoList([]);
    localStorage.removeItem("todos");
  };

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the new task is empty
    if (newTask.trim() === "") {
      return;
    }

    const newTodo: TodoItem = {
      id: Date.now(),
      task: newTask.trim(),
      status: "active",
    };

    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    setNewTask("");
  };

  const handleToggleStatus = (taskId: number) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) =>
        todo.id === taskId
          ? {
              ...todo,
              status: todo.status === "active" ? "completed" : "active",
            }
          : todo
      )
    );
  };

  const handleDeleteTodo = (taskId: number) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.id !== taskId)
    );
  };

  return (
    <div className="form-container">
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Enter a todo"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add Todo</button>
        <button type="button" onClick={clearTodoList}>
          Clear
        </button>
      </form>
      <TodoContainer
        todoList={todoList}
        onToggleStatus={handleToggleStatus}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default Todo;
