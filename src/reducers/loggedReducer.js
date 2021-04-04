const loggedReducer = (state = true, action) => {
  switch(action.type) {
    case 'signin': 
      return true;

    case 'signout': 
      return false;

    default: 
      return state;
  }
}

export default loggedReducer;