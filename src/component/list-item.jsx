import React, { useState } from "react";
import { dispatchDel, dispathChange } from "../action-creator";
import classNames from "classnames";
import styles from "../style.module.css";

export function ListItem({ element }) {
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
  console.log("minichange");
  return (
    <li
      className={classNames(
        { [styles.important]: currentImportant },
        "list-item"
      )}
    >
      <button className={styles.buttonImportant} onClick={changeElement}>
        <i className="fa fa-exclamation"></i>
      </button>
      <span>{label}</span>
      <button className={styles.buttonDelete} onClick={deleteElement}>
        <i className="fa fa-trash-o"></i>
      </button>
    </li>
  );
}
