import { ListItem } from "./List-item";

export function List({ currentStore }) {
  // accept massive and filter list and show handled massive
  let { caseMassive, filterList } = currentStore;

  if (filterList.importantFilter) {
    caseMassive = caseMassive.filter((element) => element.important === true);
  }

  if (filterList.inputFilter) {
    caseMassive = caseMassive.filter(
      (element) => element.label.includes(filterList.inputValue) === true
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
