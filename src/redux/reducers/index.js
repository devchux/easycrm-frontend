import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';
import productReducer from './productReducer';
import customerReducer from './customerReducer';
import dealReducer from './dealReducer';

export const rootReducers = combineReducers({
    products: productReducer,
    employees: employeeReducer,
    customers: customerReducer,
    deals: dealReducer,
});