import { bindActionCreators } from "redux";

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

export const mapDispatchToPropsAdd = (dispatch) => {
  const dispatchNewCase = bindActionCreators(add, dispatch);
  return {
    dispatchNewCase: (payload) => dispatchNewCase(payload),
  };
};

export const mapDispatchToPropsDelChange = (dispatch) => {
  const dispathChange = bindActionCreators(changeImportant, dispatch);
  const dispatchDel = bindActionCreators(del, dispatch);
  return {
    dispatchDel: (payload) => dispatchDel(payload),
    dispathChange: (payload) => dispathChange(payload),
  };
};

export const mapDispatchToPropsFilter = (dispatch) => {
  const dispatchFilter = bindActionCreators(setFilters, dispatch);
  return {
    dispatchFilter: (payload) => dispatchFilter(payload),
  };
};
