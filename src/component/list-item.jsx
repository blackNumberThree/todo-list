import React, { useState } from "react";
import { connect } from "react-redux";
import { mapDispatchToPropsDelChange as mapDispatchToProps } from "../action-creator";

function CreateListItem({ element, dispatchDel, dispathChange }) {
  let { label, important, id } = element;
  let [currentImportant, setCurrentImportant] = useState(important);
  if (important !== currentImportant) {
    setCurrentImportant(important);
  }
  function deleteElement() {
    dispatchDel(id);
  }
  function changeElement() {
    dispathChange(id);
  }

  console.log("mini-change");
  return (
    <li className={currentImportant ? "important list-item" : "list-item"}>
      <button className="button-important" onClick={changeElement}>
        <i className="fa fa-exclamation"></i>
      </button>
      <span>{label}</span>
      <button className="button-delete" onClick={deleteElement}>
        <i className="fa fa-trash-o"></i>
      </button>
    </li>
  );
}

export let ListItem = connect(null, mapDispatchToProps)(CreateListItem);
