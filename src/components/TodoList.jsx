import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import AddTasks from '/src/assets/Addtasks.png'


export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.list = React.createRef();
     
    this.state = {
      list: [
        { id:1,
          createdAt: 12,
          task: "Buy new sweatshirt",
          isDone: true,

        },
        {id:2,
          createdAt: 12,
          task: "Begin Promotional Phase",
          isDone: true,
        },
        {id:3,
          createdAt: 12,
          task: "Read an article",
          isDone: false,
        },
        {id:4,
          createdAt: 12,
          task: "Try not to fall asleep",
          isDone: true,
        },
        {id:5,
          createdAt: 12,
          task: 'Watch "Sherlock"',
          isDone: false,
        },
        {id:6,
          createdAt: 12,
          task: "Begin QA for the product",
          isDone: false,
        },
        {id:7,
          createdAt: 12,
          task: "Go for a walk",
          isDone: false,
        },
      ],
    };
    // this.toggleHandler = this.toggleHandler.bind(this)
    // this.updateTodoList = this.updateTodoList.bind(this)
  }
   
  static getDerivedStateFromProps(props,state){
    if(props.newTodo.task != undefined){
      return{
        list: [
          ...state.list,
          props.newTodo
        ]
      }
    }
    return null
    
  }

  componentDidMount() {
    if (this.state.list.length > 7) {
      this.list.current.classList.add("todo-list-overflow");
    }
  }
  componentDidUpdate() {
    console.log(this.props.newTodo)
    if (this.state.list.length > 7) {
      this.list.current.classList.add("todo-list-overflow");
    }
  }

  // toggleHandler(id ,task,taskStatus){
  //   // console.log(task,taskStatus, id)
  //    this.setState({
  //     list: [
         
  //     ]
  //    })
  // }
  render() {
    if(this.state.list.length==0){
      return(
        <div className="empty-container">
         <img src={AddTasks} alt="Add tasks" style={{opacity: '0.7'}}/>
         <h1>Add new tasks</h1>
         </div>
      )
    }
    return (
      <React.Fragment>
        <ul className="todo-list" ref={this.list}>
          {this.state.list.map((listItem, index) => {
            return (
              <TodoItem
                key={listItem.id}
                id = {index}
                task={listItem.task}
                isDone={listItem.isDone}
                onToggleDone = {this.toggleHandler}
                 
              />
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

TodoList.propTypes = {
  newTodo: PropTypes.object
}