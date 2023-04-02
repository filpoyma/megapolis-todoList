import React from "react";
import ReactDOM from "react-dom/client";
import TodoApp from "./components/TodoApp";
import { Provider } from "react-redux";
import "./index.css";
import store from "./redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>
);
