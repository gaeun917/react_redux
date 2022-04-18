import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';


import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist'
import {PersistGate} from "redux-persist/integration/react";
import {configureStore} from './store';

const store = configureStore();
const persistor = persistStore(store);


ReactDOM.render(
    <Provider store={store}>
        <PersistGate
            persistor={persistor}
            loading={<div>loading</div>}>
            <App/>

        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);