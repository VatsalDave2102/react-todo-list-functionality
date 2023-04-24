import { Component } from "react";
import DateComp from "./DateComp";
import TodoList from "./TodoList";
import AddInput from "./AddInput";

export default class TodoContainer extends Component {
  render() {
    return <div className="TodoContainer">
        <DateComp/>
        <TodoList/>
        <AddInput/>
        </div>;
  }
}
