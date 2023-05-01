// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = { list: [] };

const listSlice = createSlice({
  name: "list",
  initialState: initialState,
  reducers: {
    empty(state) {
      state.list = "";
    },
    add(state, action) {
      state.list = action.payload;
    },
  },
});
 
//  creating store for list
const store = configureStore({
  reducer: listSlice.reducer,
});

export const listActions = listSlice.actions;
export default store;
