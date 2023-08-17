import React, { useState, useEffect } from "react";
import TodoContainer from "../TodoContainer/TodoContainer";
import Header from "../Header/Header";
import "./Todo.css";
// import Draggable from '@shopify/draggable/src/Draggable/Draggable.js'

const Todo = () => {
  interface TodoItem {
    id: number;
    task: string;
    status: "active" | "completed";
  }

  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [theme, settheme] = useState("light");
  const [newTask, setNewTask] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<
    "all" | "active" | "completed"
  >("all");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodoList(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(todoList.length);

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

  const filteredTodoList =
    selectedStatus === "all"
      ? todoList
      : todoList.filter((todo) => todo.status === selectedStatus);

  return (
    <div className="container">
      <Header theme={theme} settheme={settheme} />
      <main className="">
        <div className="form-container">
          <form onSubmit={handleAddTodo}>
            <input
              className={`input-${theme}`}
              type="text"
              placeholder="Enter a todo"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />

            {/* <button type="button" onClick={clearTodoList}>
              Clear
            </button> */}
          </form>
          <TodoContainer
            todoList={filteredTodoList}
            onToggleStatus={handleToggleStatus}
            onDeleteTodo={handleDeleteTodo}
            setTodoList={setTodoList}
            setSelectedStatus={setSelectedStatus}
            theme={theme}
          />
        </div>
      </main>
    </div>
  );
};

export default Todo;
