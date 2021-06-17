import React from "react";
import TodoItem from "./components/TodoItem";
import "./ToDoApp.css"

interface TodoAppProps {}
interface TodoAppState {
  todoItems: string[];
  newTodo: string;
}

class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
  constructor(props: TodoAppProps) {
    super(props);
    
    this.state = {
      todoItems: [],
      newTodo: "",
    };
  }

  handleNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo: e.target.value,
    });
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
        
    const items = this.state.todoItems.concat(this.state.newTodo)

    this.setState({
      todoItems: items,
      newTodo: "",
    })
  }
  deleteRow = (whereComp: number) =>{
    if (whereComp <= -1) 
      return;
    const items = this.state.todoItems;
    items.splice(whereComp,1);
    console.log(items);
    this.setState({
      todoItems: items,
      newTodo: "",
    })
  }

  render() {
    return (
      <div>
        <div className="titleBox">
          <h1 className="title">TODO List</h1> 
          <button className="printButton" onClick={()=> window.print()}>Print</button>
        </div> 
        <form >
          <label htmlFor="new-todo" className="questionLabel">뭘 해야하나요?</label> <br />
          {
            this.state.todoItems.map((item, idx) => (
              <div><TodoItem name={item} key={idx}/> <button onClick={(e) =>{
                e.preventDefault()
                this.deleteRow(idx)
              }} className="symbalButton">X</button> </div> 
            ))
          }
          <input type="text" placeholder="할 일을 입력하세요." id="new-todo" value={this.state.newTodo} onChange={this.handleNewTodo} /> <br />
          <button className="textButton" onClick={this.handleClick} >Add #{this.state.todoItems.length + 1}</button>
        </form>
      </div>
    )
  }
}

export default TodoApp;