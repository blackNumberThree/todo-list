import { useState } from "react";
import { connect } from "react-redux";
import { mapDispatchToPropsAdd as mapDispatchToProps } from "../action-creator";


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

    dispatchNewCase(newCase);

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

export let AddBlock = connect(null, mapDispatchToProps)(CreateAddBlock);
