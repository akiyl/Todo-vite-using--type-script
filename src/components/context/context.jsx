import React from "react";
import { useState, useEffect } from "react";

const ContextTasks = React.createContext();

const TaskProvider = ({ children }) => {
  const savedTasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  const [tasks, changeTasks] = useState(savedTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [filter, setfilter] = useState("all");

  const [typeAlert, setTypeAlert] = useState({});

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  return (
    <ContextTasks.Provider
      value={
        (tasks,
        changeTasks,
        filter,
        setfilter,
        typeAlert,
        setTypeAlert,
        theme,
        setTheme)
      }
    >
      {children}
    </ContextTasks.Provider>
  );
};
export { ContextTasks, TaskProvider };
