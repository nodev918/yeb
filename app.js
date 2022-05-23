import React from "./yeact/yeact.js";
import { $, addEvent, create } from "./yq/yq.js";
import { reducer, createStore } from "./yedux/yedux.js";
import { log } from "./util/util.js";

window.R = { reducer, createStore };

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
const root = $("#root");
React.render(view, root);

let store = R.createStore(R.reducer);
const redux_div = $("#redux");
// console.log(S.getState());
// function add() {
//   store.dispatch({ type: "add", payload: 2 });
// }
function rrender(s, container) {
  console.log(s.getState());
  let div = create("div");
  div.innerHTML = `
    <div> value:${s.getState()}</div>
    <button id="add">add</button>
  `;
  container.appendChild(div, container);
}

rrender(store, redux_div);

store.subscribe(() => {
  rrender(store, redux_div);
});

addEvent($("#add"), "click", () => {
  store.dispatch({ type: "add", payload: 2 });
  // console.log("hi");
});

// Object.prototype.remove = function () {
//   return arguments[2];
// };

// log(Object.remove($("#root"), $("#hi"), $(".ho")));
// log($("#button"));
