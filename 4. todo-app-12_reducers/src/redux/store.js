import * as redux from "redux";
// const redux = require("redux");

import { todoReducer } from "./reducers/todoReducer";
export const store = redux.createStore(todoReducer);