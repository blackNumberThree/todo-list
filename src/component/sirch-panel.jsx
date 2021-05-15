import { dispatchFilter } from "../action-creator";
import { connect } from "react-redux";
import classNames from "classnames";
import styles from "../style.module.css";

function CreateSirchInput({ dispatchFilter, filterList }) {
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
      <div className={styles.findBlock}>
        <button
          className={classNames({
            [styles.redShadow]: !filterList.importantFilter,
          })}
          onClick={showAll}
        >
          All case
        </button>
        <button
          className={classNames({
            [styles.redShadow]: filterList.importantFilter,
          })}
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

function mapStateToProps(state) {
  return {
    filterList: state.filterList,
  };
}
export const mapDispatchToProps = () => {
  return {
    dispatchFilter: (payload) => dispatchFilter(payload),
  };
};
export let SirchInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSirchInput);
