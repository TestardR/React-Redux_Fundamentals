import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true }; // whenever we want to update / modify a property we use the spread syntax
    case SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
