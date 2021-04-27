import { useState } from "react";
import { List } from "./list";

export function SirchInput({ caseMassive }) {
  let filterList = {
    inputFilter: false,
    inputValue: "",
    importantFilter: false,
  };

  let [currentFilterList, setCurrentFilterList] = useState(filterList);
  function showImportant() {
    setCurrentFilterList({ ...currentFilterList, importantFilter: true });
  }
  function showAll() {
    setCurrentFilterList({ ...currentFilterList, importantFilter: false });
  }

  function serchChange(event) {
    if (event.target.value !== "") {
      setCurrentFilterList({
        ...currentFilterList,
        inputFilter: true,
        inputValue: event.target.value,
      });
    } else {
      setCurrentFilterList({
        ...currentFilterList,
        inputFilter: false,
        inputValue: "",
      });
    }
  }

  return (
    <>
      <div className="find-block">
        <button
          className={currentFilterList.importantFilter ? "" : "red-shadow"}
          onClick={showAll}
        >
          All case
        </button>
        <button
          className={currentFilterList.importantFilter ? "red-shadow" : ""}
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
      <List caseMassive={caseMassive} currentFilterList={currentFilterList} />
    </>
  );
}
