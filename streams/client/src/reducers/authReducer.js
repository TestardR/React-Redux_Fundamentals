const INITIAL_STATE = {
  isSignedIn: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { ...state, isSignIn: true }; // whenever we want to update / modify a property we use the spread syntax
    case 'SIGN_OUT':
      return { ...state, isSignIn: false };
    default:
      return state;
  }
};
