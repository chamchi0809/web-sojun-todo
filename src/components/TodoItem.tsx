import React from "react";
import "../ToDoApp.css";

interface TodoItemProps {
  name: string;
}

function TodoItem(props: TodoItemProps) {
  return(
    <div className="TodoItem">{props.name}</div>
  )
}

export default TodoItem;