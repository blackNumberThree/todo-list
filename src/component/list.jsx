import { ListItem } from "./List-item";
import { connect } from "react-redux";

function CreateList({ filterList, caseMassive }) {
  // accept massive and filter list and show handled massive
  let currentMassive = caseMassive;
  if (filterList.importantFilter) {
    currentMassive = currentMassive.filter(
      (element) => element.important === true
    );
  }

  if (filterList.inputFilter) {
    currentMassive = currentMassive.filter(
      (element) => element.label.includes(filterList.inputValue) === true
    );
  }

  let finishList = currentMassive.map((element) => {
    return <ListItem key={element.id} element={element} />;
  });

  return <ol>{finishList}</ol>;
}

function mapStateToProps(state) {
  return {
    filterList: state.filterList,
    caseMassive: state.caseMassive,
  };
}

export let List = connect(mapStateToProps)(CreateList);
