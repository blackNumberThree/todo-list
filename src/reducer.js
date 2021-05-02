export const reducer = function (
  state = {
    caseMassive: [],
    filterList: { inputFilter: false, inputValue: "", importantFilter: false },
  },
  { type, payload }
) {
  let { caseMassive, filterList } = state;

  let currenCaseId =
    type === "DLT" || type === "CHNG"
      ? caseMassive.findIndex((element) => element.id === payload)
      : undefined;
  switch (type) {
    case "ADD":
      return {
        caseMassive: [...caseMassive, payload],
        filterList: { ...filterList },
      };

    case "setFilters":
      return { ...state, filterList: payload };

    case "DLT":
      return {
        caseMassive: caseMassive.filter((element, index) => {
          if (index !== currenCaseId) {
            return element;
          }
        }),

        filterList: { ...filterList },
      };

    case "CHNG":
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
