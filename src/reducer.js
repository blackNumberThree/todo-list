let startMassive = [
  {
    label: "first",
    important: true,
    id: 1,
  },
  {
    label: "second",
    important: false,
    id: 2,
  },
  {
    label: "third",
    important: true,
    id: 3,
  },
];

export const reducer = function (
  state = {
    caseMassive: startMassive,
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
      console.log("del");
      return {
        caseMassive: caseMassive.filter((element, index) => {
          if (index !== currenCaseId) {
            return element;
          }
          return { caseMassive, filterList };
        }),

        filterList: { ...filterList },
      };

    case "change":
      console.log("chng");
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
