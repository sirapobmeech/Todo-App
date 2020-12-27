import { combineReducers } from 'redux';
import todo from './todoReducer';
import status from './fetchReducer';

const rootReducer = combineReducers({
    todo,
    status,
})

export default rootReducer