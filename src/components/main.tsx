import React from "react";
import ReactDOM from "react-dom/client";
import Todo from "./Todo/Todo";
import "./index.css";
import Header from "./Header/Header";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <h1 className="text-xl font-bold underline text-green-500 hover:text-red-600 first-letter:text-3xl sm:border md:text-4xl">
      Hello world!
    </h1> */}

    <Header />
    <Todo />
  </React.StrictMode>
);
