import { bindActionCreators } from "redux";
import { createStore } from "redux";
import { reducer } from "./reducer";

export const store = createStore(reducer);

let dispatch = store.dispatch;

const add = (prop) => {
  return {
    type: "add",
    payload: prop,
  };
};

const del = (prop) => {
  return {
    type: "delete",
    payload: prop,
  };
};

const changeImportant = (prop) => {
  return {
    type: "change",
    payload: prop,
  };
};

export const setFilters = (prop) => {
  return {
    type: "setFilters",
    payload: prop,
  };
};

export const dispathChange = bindActionCreators(changeImportant, dispatch);
export const dispatchDel = bindActionCreators(del, dispatch);
export const dispatchNewCase = bindActionCreators(add, dispatch);
export const dispatchFilter = bindActionCreators(setFilters, dispatch);


