import * as types from './../constants/actionTypes';
import { List, Map } from 'immutable';
import { combineReducers } from 'redux';

function exampleReducerFunction(state = 'all', action) {
  switch (action.type) {
    case types.EXAMPLE_ACTION:
      return action.argument;
    default:
      return state;
  }
}

export default combineReducers({
  exampleReducerFunction,
});