import { combineReducers } from 'redux';
import todo from './todoReducer';
import status from './fetchReducer';
import option from './optionReducer';
import backdrop from './backDropReducer';

const rootReducer = combineReducers({
    todo,
    status,
    option,
    backdrop,
})

export default rootReducer