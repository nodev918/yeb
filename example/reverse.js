head = document.querySelector("#x");

list = head.children;

function reverse(l) {
  max = l.length;
  new_list = [];
  for (var i = 0; i < max; i++) {
    new_list.push(l[max - 1 - i]);
  }

  return new_list;
}
nl = reverse(list);

head.innerHTML = "";

nl.map((item) => {
  head.appendChild(item);
});
