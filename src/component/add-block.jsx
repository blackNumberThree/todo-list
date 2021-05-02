import { useState } from "react";
import { add } from "../action-creator";
// variable for create if for new case

export function AddBlock() {
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

    add(newCase);

    useinputValue("");
  }
  return (
    <div className="input-block">
      <input
        type="text"
        onChange={formChange}
        value={inputValue}
        placeholder="input new case"
      />
      <button className="addCase" onClick={addCase} value={inputValue}>
        ADD
      </button>
    </div>
  );
}