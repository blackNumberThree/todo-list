import { useState } from "react";
import { connect } from "react-redux";
import { dispatchNewCase } from "../action-creator";
import styles from "../style.module.css";

function CreateAddBlock({ dispatchNewCase }) {
  let [inputValue, useinputValue] = useState("");
  function formChange(event) {
    useinputValue(event.target.value);
  }

  // created new case and send it to reduser
  function addCase() {
    let newCase = {
      label: inputValue,
      important: false,
      id: Date.now(),
    };

    if (inputValue) {
      dispatchNewCase(newCase);
    }

    useinputValue("");
  }
  return (
    <div className={styles.inputBlock}>
      <input
        type="text"
        onChange={formChange}
        value={inputValue}
        placeholder="input new case"
      />
      <button className={styles.addCase} onClick={addCase} value={inputValue}>
        ADD
      </button>
    </div>
  );
}

const mapDispatchToProps = () => {
  return {
    dispatchNewCase: (payload) => dispatchNewCase(payload),
  };
};

export let AddBlock = connect(null, mapDispatchToProps)(CreateAddBlock);
