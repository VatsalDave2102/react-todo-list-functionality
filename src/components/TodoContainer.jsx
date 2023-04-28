import { Component } from "react";
import DateComp from "./DateComp";
import TodoList from "./TodoList";
import AddInput from "./AddInput";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class TodoContainer extends Component {
  constructor(props) {
    super(props);

    this.handleNewInput = this.handleNewInput.bind(this);
    this.toggleHandler = this.toggleHandler.bind(this);
    this.expirationTrigger = this.expirationTrigger.bind(this);
    this.firsTodoHandler = this.firsTodoHandler.bind(this);
    this.restTodoHandler = this.restTodoHandler.bind(this);
  }

  componentDidMount() {
    let storedList = JSON.parse(localStorage.getItem("TodoList"));
    // all tasks will expire when date changes
    this.expirationTrigger(storedList);

    // if task already exists when mounting, store them in state
    if (storedList != null) {
      this.props.add(storedList);
    }
  }

  // function to delete all todos when day ends
  expirationTrigger(list) {
    if (list != null) {
      let today = new Date();
      let tempList = [];
      // comparing today's date and creation date of task
      list.map((item) => {
        if (item.createdAt == today.getDate()) {
          tempList.push(item);
        }
      });
      localStorage.setItem("TodoList", JSON.stringify(tempList));
    }
  }

  // function to handle new todo input
  handleNewInput(newTodo) {
    let date = new Date();
    if (this.props.list.length == 0) {
      // for first todo
      this.firsTodoHandler(date, newTodo);
    } else {
      // for remaingin todos
      this.restTodoHandler(date, newTodo);
    }
  }

  // function to add first todo in localStorage and set the state from localStorage
  firsTodoHandler(date, newTodo) {
    // temporary list object
    let tempList = [
      {
        id: date.getTime(),
        task: newTodo,
        isDone: false,
        createdAt: date.getDate(),
      },
    ];
    localStorage.setItem("TodoList", JSON.stringify(tempList));
    this.props.add(JSON.parse(localStorage.getItem("TodoList")));
  }

  // function to add remaingin todos in localStorage with appending current todos and set the state from localStorage
  restTodoHandler(date, newTodo) {
    // temporary list object
    let tempList = [
      ...this.props.list,
      {
        id: date.getTime(),
        task: newTodo,
        isDone: false,
        createdAt: date.getDate(),
      },
    ];
    // this.props.add(tempList)
    localStorage.setItem("TodoList", JSON.stringify(tempList));
    this.props.add(JSON.parse(localStorage.getItem("TodoList")));
  }

  // function to toggle the status of task done
  toggleHandler(id, isDone) {
    // targeting localStorage array
    let targetList = JSON.parse(localStorage.getItem("TodoList"));
    // getting the task that which has been clicked
    let targetTask = targetList.findIndex((obj) => obj.id === id);
    // changing its state
    targetList[targetTask].isDone = !isDone;
    // storing it in localStorage
    localStorage.setItem("TodoList", JSON.stringify(targetList));
    // setting state from localStorage

    this.props.add(JSON.parse(localStorage.getItem("TodoList")));
  }

  render() {
    return (
      <div className="TodoContainer">
        <DateComp />
        <TodoList
          listData={this.props.list}
          updateStatus={this.toggleHandler}
        />
        <AddInput getNewTodo={this.handleNewInput} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    empty: () => dispatch({ type: "EMPTY" }),
    add: (value) => dispatch({ type: "ADD", newTodo: value }),
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);

TodoContainer.propTypes = {
  list: PropTypes.array,
  add: PropTypes.func,
  empty: PropTypes.func,
};
