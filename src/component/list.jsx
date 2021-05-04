import { ListItem } from "./List-item";
import { connect } from "react-redux";


function CreateList({ filterList, caseMassive }) {
  // accept massive and filter list and show handled massive
  let newMassive = caseMassive;

  if (filterList.importantFilter) {
    newMassive = newMassive.filter((element) => element.important === true);
  }

  if (filterList.inputFilter) {
    newMassive = newMassive.filter(
      (element) => element.label.includes(filterList.inputValue) === true
    );
  }

  let finishList = newMassive.map((element) => {
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
