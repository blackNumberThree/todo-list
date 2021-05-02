import { setFilters } from "../action-creator";

export function SirchInput(props) {
  let filterList = props.currentStore.filterList;

  function showImportant() {
    setFilters({ ...filterList, importantFilter: true });
  }
  function showAll() {
    setFilters({ ...filterList, importantFilter: false });
  }

  function serchChange(event) {
    if (event.target.value !== "") {
      setFilters({
        ...filterList,
        inputFilter: true,
        inputValue: event.target.value,
      });
    } else {
      setFilters({
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
