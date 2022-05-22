import { Navbar } from "./component/Navbar.js";
// import Yeact from "./library/yeact/Yeact.js";
Navbar();

// Yeact.createElement();
// Yeact.render();

// const view = <div>Hello</div>;

function createElement(element) {}

function render(element, container) {
  console.log("type: ", element.type);
  let dom =
    element.type == "TEXT_ELEMEMT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  const isProperty = (keys) => key != "children";
  Object.keys(element.props)
    .filter(isProperty)
    .map((name) => {
      dom[name] = element.props[name];
    });

  element.props.children.forEach((child) => render(child, dom));
  container.appendChild(dom);
  return dom;
}

const r = document.getElementById("root");
Yeact.render(<div>hello</div>, r);

const Yeact = {
  render,
};
