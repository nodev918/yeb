import React from "./yeact/yeact.js";
import { $ } from "./yq/yq.js";
import { reducer, createStore } from "./yedux/yedux.js";
import { log } from "./util/util.js";

const view = (
  <div>
    <span>Hello</span>
    <div id="hi">hi</div>
    <div className="ho">ho</div>
    <div style="color:red">World!!!</div>
    <input id="button" type="button" value="click" onclick="hello"></input>
  </div>
);

window.hello = function () {
  console.log("helloooo");
};

React.render(view, document.getElementById("root"));

// Object.prototype.remove = function () {
//   return arguments[2];
// };

// log(Object.remove($("#root"), $("#hi"), $(".ho")));
// log($("#button"));
