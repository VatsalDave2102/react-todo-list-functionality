import { Component } from "react";
import DateComp from "./DateComp";
import TodoList from "./TodoList";
import AddInput from "./AddInput";

export default class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };

    this.handleNewInput = this.handleNewInput.bind(this);
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  componentDidMount() {
    let storedList = JSON.parse(localStorage.getItem("TodoList"));
    // let today = new Date();
    
    if (storedList != null) {
      this.setState({
        list: storedList,
      });
    }
  }

  handleNewInput(newTodo) {
    let date = new Date();
    if (this.state.list.length == 0) {
      let tempList = [
        {
          id: date.getTime(),
          task: newTodo,
          isDone: false,
          createdAt: date.getDate(),
        },
      ];
      localStorage.setItem("TodoList", JSON.stringify(tempList));
      this.setState({
        list: JSON.parse(localStorage.getItem("TodoList")),
      });
      console.log("First todo");
    } else {
      let tempList = [
        ...this.state.list,
        {
          id: date.getTime(),
          task: newTodo,
          isDone: false,
          createdAt: date.getDate(),
        },
      ];
      localStorage.setItem("TodoList", JSON.stringify(tempList));
      this.setState({
        list: JSON.parse(localStorage.getItem("TodoList")),
      });
      console.log("Updated list");
    }
  }

  toggleHandler(id, isDone) {
    let targetList = JSON.parse(localStorage.getItem("TodoList"));
    let targetTask = targetList.findIndex((obj) => obj.id === id);
    targetList[targetTask].isDone = !isDone;
    localStorage.setItem("TodoList", JSON.stringify(targetList));
    this.setState({
      list: JSON.parse(localStorage.getItem("TodoList")),
    });
  }
  render() {
    return (
      <div className="TodoContainer">
        <DateComp />
        <TodoList
          listData={this.state.list}
          updateStatus={this.toggleHandler}
        />
        <AddInput getNewTodo={this.handleNewInput} />
      </div>
    );
  }
}
