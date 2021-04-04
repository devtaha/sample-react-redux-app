const counterReducer = (state = 1, action) => {
  switch (action.type) {
    case "increment":
      return state + (action.payload || 1);

    case "decrement":
      return state - (action.num || 1);

    default:
      return state;
  }
};

export default counterReducer;
