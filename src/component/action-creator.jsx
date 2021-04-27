import { store } from "./app";

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
