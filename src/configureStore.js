import { createStore } from 'redux';
import { rootReducers } from './redux/reducers';

export default function configureStore(initialState) {
    return createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}