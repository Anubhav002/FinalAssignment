import {getDataReducer,getMainDataReducer} from "./reducer";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({getDataReducer,getMainDataReducer})

export default rootReducer