export function addTodo(itemName) {
  return { type: "ADD_TODO", payload: { name: itemName }};
}
export function toggleTodo(itemName) {
  return { type: "TOGGLE_TODO", payload: { name: itemName }};
}
export function setFilter(filter) {
  return { type: "SET_FILTER", payload: filter };
}