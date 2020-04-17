let count = 0;
const addOne = () => {
  console.log("add One ");
  count++;
  renderTemplate();
};
const minusOne = () => {
  console.log("minusOne");
  count--;
  renderTemplate();
};
const reset = () => {
  console.log("reset");
  count = 0;
  renderTemplate();
};

// Challeneg # 1: Make new template named template 2
// div
// h1 -> Syed Raza
// p Age : 36
// p -> Riyadh, Saudi Arabia
// Render template 2 instead of template
var appRoot = document.getElementById("app");

const renderTemplate = () => {
  var template3 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(template3, appRoot);
};

renderTemplate();
