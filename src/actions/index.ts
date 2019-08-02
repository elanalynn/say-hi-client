import { SET_USERS } from '../constants/action-types'

export function setUsers(payload: any) {
  return { type: SET_USERS, payload }
};
