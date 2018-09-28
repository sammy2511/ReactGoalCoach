import {SIGNED_IN,SET_GOALS} from '../constants';

export function LogUser(email){
  const action = {
    type:SIGNED_IN,
    email:email
  }
  return action;
}

export function setGoals(goals){
  const action = {
    type:SET_GOALS,
    goals:goals
  }
  return action;
}
