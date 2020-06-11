import { combineReducers } from 'redux';

import feeds from './reducers/feeds';
import pageNumber from './reducers/pageNumber';

export default combineReducers({
  feeds,
  pageNumber
});