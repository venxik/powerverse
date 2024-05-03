import { combineReducers } from 'redux';

import { mainReducer } from './main';
import { baseApiReducer } from '@Services/queries';

const rootReducer = combineReducers({
  ...mainReducer,
  ...baseApiReducer,
});

export { rootReducer };
