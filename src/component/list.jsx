
import ListItem from "./list-item";

export function List(props) {
  // accept massive and filter list and show handled massive
  let { caseMassive, currentFilterList } = props;

  if (currentFilterList.importantFilter) {
    caseMassive = caseMassive.filter((element) => element.important === true);
  }

  if (currentFilterList.inputFilter) {
    caseMassive = caseMassive.filter(
      (element) => element.label.includes(currentFilterList.inputValue) === true
    );
  }
  return (
    <ol>
      {caseMassive.map((element) => {
        return <ListItem key={element.id} element={element} />;
      })}
    </ol>
  );
}
