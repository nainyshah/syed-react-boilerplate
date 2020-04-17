import React from "react";
import ReactDOM from "react-dom";

// one way of passing children to component
const Layout = (props) => {
  return (
    <div>
      <p> header </p>
      {props.content}
      <p> footer </p>
      {props.actions}
    </div>
  );
};

const template = (
  <div>
    <h1>Page Title</h1>
    <p>This is my page.</p>
  </div>
);

const buttons = (
  <div>
    <button> add </button>
    <button> remove </button>
  </div>
);

// ReactDOM.render(
//   <Layout content={template} actions={buttons} />,
//   document.getElementById("app")
// );

// Another way or we can say a better way
const Layout1 = (props) => {
  return (
    <div>
      <p> header </p>
      {props.children}
      <p> footer </p>
    </div>
  );
};

ReactDOM.render(
  <Layout>
    <div>
      <h1>Page Title</h1>
      <p>This is my page.</p>
    </div>
  </Layout>,
  document.getElementById("app")
);
