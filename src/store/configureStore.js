import * as ToDoApp from "./ToDoApp";
import { createStore, combineReducers } from 'redux';

export default function configureStore() {
    const reducers = {
        todo: ToDoApp.reducer
    };

    const rootReducer = combineReducers({
        ...reducers
    });

    return createStore(
        rootReducer);
}