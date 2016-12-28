import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import flash from './flash';
import notes from './notes';
import filter from './filter'
import contacts from './contacts'

const rootReducer = combineReducers({
    routing: routerReducer,
    user,
    flash,
    notes,
    contacts,
    filter
});

export default rootReducer;
