import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.list = React.createRef();
    this.state = {
      list: [
        {
          task: "Buy new sweatshirt",
          isDone: true,
        },
        {
          task: "Begin Promotional Phase",
          isDone: true,
        },
        {
          task: "Read an article",
          isDone: false,
        },
        {
          task: "Try not to fall asleep",
          isDone: false,
        },
        {
          task: 'Watch "Sherlock"',
          isDone: false,
        },
        {
          task: "Begin QA for the product",
          isDone: false,
        },
        {
          task: "Go for a walk",
          isDone: false,
        },
      ],
    };
  }

  componentDidMount() {
    let todoList = document.querySelector(".todo-list");
    let listHeight = this.list.current.clientHeight;
    console.log(listHeight);
    if (listHeight >= 451) {
      todoList.classList.add("todo-list-overflow");
    }
  }
  componentDidUpdate() {
    let todoList = document.querySelector(".todo-list");
    let listHeight = this.list.current.clientHeight;
    if (listHeight >= 451) {
      todoList.classList.add("todo-list-overflow");
    }
  }
  render() {
    return (
      <React.Fragment>
        <ul className="todo-list" ref={this.list}>
          {this.state.list.map((listItem, index) => {
            return (
              <TodoItem
                key={index}
                task={listItem.task}
                isDone={listItem.isDone}
              />
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}
