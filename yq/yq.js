function $(element) {
  return document.querySelector(element);
}
function addEvent(element, event, fn) {
  element.addEventListener(event, fn);
}

function create(type) {
  return document.createElement(type);
}
export { $, addEvent, create };
