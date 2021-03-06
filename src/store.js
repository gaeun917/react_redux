import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import {todos} from './todos/reducer';

//action, reducer


const reducers = {
    todos,
};


const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers(reducers);
const persisReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => createStore(persisReducer,
    composeWithDevTools(
        applyMiddleware(thunk)));