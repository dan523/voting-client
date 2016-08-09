/// <reference path="../typings/index.d.ts" />

import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/voting';

const pair = ['Trainspotting', '28 Days Later'];
ReactDOM.render(
    <Voting pair={pair}/>,
    document.getElementById('app')
);