import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormreducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
    auth:AuthReducer,
    employeeForm:EmployeeFormreducer,
    employees:EmployeeReducer
});