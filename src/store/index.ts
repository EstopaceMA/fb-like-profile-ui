import { createStore, combineReducers } from 'redux';


import systemsReducer from './system/reducers';

const rootReducer = combineReducers({
    systems: systemsReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default createStore(rootReducer);