import React from "react";
import { del, importantChange } from "./action-creator";

function ListItem({ element }) {
  let { label, important, id } = element;

  function deleteElement() {
    del(id);
  }
  function changeElement() {
    importantChange(id);
  }
  
  return (
    <li className={important ? "important list-item" : "list-item"}>
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
export default ListItem;
