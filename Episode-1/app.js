import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "main-heading" }, "Main Heading1"),
    React.createElement("h2", { id: "sub-heading" }, "sub heading1"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
