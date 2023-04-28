import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import AddTasks from "/src/assets/Addtasks.png";
// import { reactLocalStorage } from "reactjs-localstorage";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    // reference to todo-list element
    this.list = React.createRef();
  }

  componentDidMount() {
    // condition for scroll
    if (this.props.listData.length > 7) {
      this.list.current.classList.add("todo-list-overflow");
    }
  }

  componentDidUpdate() {
    // condition for scroll
    if (this.props.listData.length > 7) {
      this.list.current.classList.add("todo-list-overflow");
    }
  }

  render() {
    // if there are no tasks
    if (this.props.listData.length == 0) {
      return (
        <div className="empty-container">
          <img src={AddTasks} alt="Add tasks" style={{ opacity: "0.7" }} />
          <h1>Add new tasks</h1>
        </div>
      );
    } else {
      return (
        <React.Fragment>
              <ul className="todo-list" ref={this.list}>
              {this.props.listData.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    id={item.id}
                    task={item.task}
                    isDone={item.isDone}
                    updateStatus={this.props.updateStatus}
                  />
                );
              })}
            </ul>
        </React.Fragment>
      );
    }
  }
}

TodoList.propTypes = {
  listData: PropTypes.array,
  updateStatus: PropTypes.func,
};
