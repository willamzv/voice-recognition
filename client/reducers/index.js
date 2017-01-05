import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import flash from './flash';
import notes from './notes';
import filter from './filter'
import contacts from './contacts'
import time from './time'

const rootReducer = combineReducers({
    routing: routerReducer,
    user,
    flash,
    notes,
    contacts,
    filter,
    time
});

export default rootReducer;
