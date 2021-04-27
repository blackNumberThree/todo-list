const reducer = function (state = [], { type, payload }) {
  let newState = [...state];

  let currenCase =
    type === "DLT" || type === "CHNG"
      ? newState.findIndex((element) => element.id === payload)
      : undefined;

  switch (type) {
    case "ADD":
      return [...state, payload];

    case "DLT":
      newState.splice(currenCase, 1);
      return newState;

    case "CHNG":
      newState[currenCase].important = !newState[currenCase].important;
      return newState;
    default:
      return newState;
  }
};

export default reducer;
