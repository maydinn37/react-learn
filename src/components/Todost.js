import TodoItem from "./TodoItem";
import { memo } from "react";
function Todost({ state }) {
  console.log("todo render");

  return (
    <ul>
      {state.todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />
      ))}
    </ul>
  );
}
export default memo(Todost);
