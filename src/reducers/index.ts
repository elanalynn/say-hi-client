import { SET_USERS } from '../constants/action-types';

const initialState = {
  users: []
};

function rootReducer(state = initialState, action: any) {
  if (action.type === SET_USERS) {
    return Object.assign({}, state, {
      users: state.users = action.payload
    });
  }

  return state;
}

export default rootReducer;
