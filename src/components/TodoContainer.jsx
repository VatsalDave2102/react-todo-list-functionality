import { Component } from "react";
import DateComp from "./DateComp";
import TodoList from "./TodoList";
import AddInput from "./AddInput";


export default class TodoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: {}
    }
     
    this.handleNewInput = this.handleNewInput.bind(this)
  }
  handleNewInput(newTodo){
    let date = new Date()
    this.setState({
      newTodo: {
        id: date.getTime(),
        task: newTodo,
        isDone: false,
        createdAt: date.getDate()
      }
    })
  }
  render() {
    return <div className="TodoContainer">
        <DateComp/>
        <TodoList newTodo={this.state.newTodo}/>
        <AddInput getNewTodo = {this.handleNewInput} />
        </div>;
  }
}

