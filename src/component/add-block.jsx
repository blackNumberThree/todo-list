import { useState } from "react";
import { add } from "./action-creator";

let idCounter = 0;

export function AddBlock() {
  let [inputValue, useinputValue] = useState("");
  function formChange(event) {
    useinputValue(event.target.value);
  }

  function addCase() {
    let newCase = {
      label: inputValue + idCounter,
      important: false,
      id: idCounter,
    };
    idCounter = idCounter + 1;

    add(newCase);

    useinputValue("");
  }
  return (
    <div className="input-block">
      <input type="text" onChange={formChange} value={inputValue} />
      <button className="addCase" onClick={addCase} value={inputValue}>
        ADD
      </button>
    </div>
  );
}
