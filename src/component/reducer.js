const reducer = function (
  state = { caseMassive: [], filter: {} },
  { type, payload }
) {
  let newState = [...state];

  let currenCaseId =
    type === "DLT" || type === "CHNG"
      ? newState.findIndex((element) => element.id === payload)
      : undefined;

  switch (type) {
    case "ADD":
      return [...state, payload];

    case "DLT":
      newState.splice(currenCaseId, 1);
      return newState;

    case "CHNG":
      newState[currenCaseId].important = !newState[currenCaseId].important;
      return newState;
    default:
      return newState;
  }
};

export default reducer;
