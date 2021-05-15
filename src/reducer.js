// let startMassive = [
//   {
//     label: "first",
//     important: true,
//     id: 1,
//   },
// ];

export const reducer = function (
  state = {
    caseMassive: [],
    filterList: { inputFilter: false, inputValue: "", importantFilter: false },
  },
  { type, payload }
) {
  let { caseMassive, filterList } = state;
  let currenCaseId =
    type === "delete" || type === "change"
      ? caseMassive.findIndex((element) => element.id === payload)
      : undefined;
  switch (type) {
    case "add":
      return {
        caseMassive: [...caseMassive, payload],
        filterList: { ...filterList },
      };
    case "setFilters":
      return { ...state, filterList: payload };
    case "delete":
      return {
        caseMassive: caseMassive.filter((element, index) => {
          if (index !== currenCaseId) {
            console.log(index, currenCaseId);
            return element;
          }
        }),
        filterList: { ...filterList },
      };

    case "change":
      return {
        caseMassive: caseMassive.map((element, index) => {
          if (index === currenCaseId) {
            element.important = !element.important;
          }
          return element;
        }),
        filterList,
      };
    default:
      return { caseMassive, filterList };
  }
};
