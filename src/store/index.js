import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterReducer";

import authReducer from "./authReducer";

import todoreducer from "./reducer/todo";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    todo: todoreducer,
  },
});

export default store;
