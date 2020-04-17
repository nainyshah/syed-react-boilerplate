console.log("App.js is running/....");

// Challenge : create app object title/subTitle
// use title/subTitle in the template
// render template

// Challenge
// Only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" else "No Options"

var app = {
  title: "Indecision App",
  subTitle: "This app is my first project of react",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  console.log("onFormSubmit");
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
  //console.log(appObject.options.length);
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const rand = Math.random() * app.options.length;
  // console.log(parseInt(rand));
  const selectedValue = parseInt(rand);
  alert(app.options[selectedValue]);
};
// JSX - Javascript XML

const appRoot = document.getElementById("app");
console.log("render method");

const render = () => {
  var template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? "Here are your Options" : "No Options"}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={onRemoveAll}>Remove all</button>
      <ol>
        {app.options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
render();
