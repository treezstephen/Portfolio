import React from "react";
import ReactDOM from 'react-dom';

//Redux
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'

import "./styles.scss";

import AppContainer from './containers/AppContainer';

ReactDOM.render(
    <Provider store={configureStore()}>
        <AppContainer />
    </Provider>,
    document.getElementById("root")
);