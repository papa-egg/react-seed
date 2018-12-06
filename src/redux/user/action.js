import * as user from './action-type';

export const setName = (name) => {
  return {
    type: user.SETNAME,
    name,
  }
};
