import { store } from "./App";

export const add = (prop) => {
  store.dispatch({
    type: "ADD",
    payload: prop,
  });
};

export const del = (prop) => {
  store.dispatch({
    type: "DLT",
    payload: prop,
  });
};

export const importantChange = (prop) => {
  store.dispatch({
    type: "CHNG",
    payload: prop,
  });
};
export const setFilters = (prop) => {
  store.dispatch({
    type: "setFilters",
    payload: prop,
  });
};
