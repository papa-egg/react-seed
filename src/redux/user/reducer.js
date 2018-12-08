import * as user from './action-type';

let defaultState = {
  name: '',
};

// user defaultState
export const userMsg = (state = defaultState , action = {}) => {
  switch (action.type) {
    case user.SETNAME:
      state.name = action.name;
      return {...state, ...{ name: action.name }};
    default:
      return state;
  }
};
