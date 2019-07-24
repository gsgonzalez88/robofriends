import {CHANGE_SEARCH_FIELD} from './constants';

/* first we create the actions.js where we generate an object with an arrow function
 that receives an argument and generate an action called with a property "type" and sends 
 a payload which is the data we needed to go on. */

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});
