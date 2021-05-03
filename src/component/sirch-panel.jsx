import { mapDispatchToPropsFilter as mapDispatchToProps } from "../action-creator";
import { connect } from "react-redux";

function CreateSirchInput({ dispatchFilter, currentStore }) {
  console.log(currentStore);
  let filterList = currentStore.filterList;

  function showImportant() {
    dispatchFilter({ ...filterList, importantFilter: true });
  }
  function showAll() {
    dispatchFilter({ ...filterList, importantFilter: false });
  }

  function serchChange(event) {
    if (event.target.value !== "") {
      dispatchFilter({
        ...filterList,
        inputFilter: true,
        inputValue: event.target.value,
      });
    } else {
      dispatchFilter({
        ...filterList,
        inputFilter: false,
        inputValue: "",
      });
    }
  }

  return (
    <>
      <div className="find-block">
        <button
          className={filterList.importantFilter ? "" : "red-shadow"}
          onClick={showAll}
        >
          All case
        </button>
        <button
          className={filterList.importantFilter ? "red-shadow" : ""}
          onClick={showImportant}
        >
          only important
        </button>
        <br />
        <input
          type="text"
          onChange={serchChange}
          placeholder="input what you are looking "
        />
      </div>
    </>
  );
}

export let SirchInput = connect(null, mapDispatchToProps)(CreateSirchInput);
