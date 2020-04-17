console.log("utils.js is running");

// another way to export
export const square = (x) => x * x;
export const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;

export default (a, b) => a - b;

// one way to export
// export { square, add, subtract as default };
// now lets understand default export
// we can set only one named export item as default
