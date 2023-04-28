import { createStore } from "redux";

const initialState = { list:  [] };
const reducer = (state = initialState, action) => {
  // console.log(state.list);
  if (action.type == "EMPTY") {
    return {
      list: [],
    };
  }
  if (action.type == "ADD") {
    return {
      list: action.newTodo,
    };
  }
  // if (action.type == "APPEND") {
  //   return {
  //     list:  action.newTodo
  //   };
  // }
  return state
};
//  creating store for list
const store = createStore(reducer);

export default store;
