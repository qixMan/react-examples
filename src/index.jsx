import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/index.jsx';
import * as localStorageUtils from './app/utils/localStorageUtils.js'
import defaultData from './app/constants/defaultData.js'

const data = localStorageUtils.get() || defaultData;

ReactDOM.render(
    <App cards={data.cards} />,
    document.querySelector("#container")
);