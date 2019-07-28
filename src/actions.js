import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

/* first we create the actions.js where we generate an object with an arrow function
 that receives an argument and generate an action called with a property "type" and sends 
 a payload which is the data we needed to go on. */

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING});
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
      .catch(err => dispatch({type: REQUEST_ROBOTS_FAILED, payload: err}))
}



export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

/* export const setSearchField = (text) = {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
} */
