import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Dashboard from '../containers/Dashboard/_reducers';

export default combineReducers({
    form: formReducer,
    dashboard: Dashboard
});