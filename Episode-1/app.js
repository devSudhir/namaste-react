// const h1 = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// );

// console.log(h1);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "main-heading" }, "Main Heading"),
    React.createElement("h2", { id: "sub-heading" }, "sub heading"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
