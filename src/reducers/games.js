import { SET_GAMES } from '../actions/actions';

export default function games(state = [], action = {}) {
  switch(action.type) {
    default: return state;
    case SET_GAMES:
      return action.games;
  }
};
