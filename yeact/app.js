// import { createElement } from "./createElement/createElement.js";
// import { render } from "./render/render.js";
import React from "./yeact/yeact.js";
import { $ } from "./yq/yq.js";
const log = console.log;

const root = document.getElementById("root");

const view = (
  <div>
    <span>Hello</span>
    <div id="hi">hi</div>
    <div className="ho">ho</div>
    <div style="color:red">World!!!</div>
  </div>
);

React.render(view, root);

Object.prototype.remove = function () {
  return arguments[2];
};

log(Object.remove($("#root"), $("#hi"), $(".ho")));
