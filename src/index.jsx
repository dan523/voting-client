/// <reference path="../typings/index.d.ts" />

import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/voting';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App';

const pair = ['Trainspotting', '28 Days Later'];

const routes = <Route component={App}>
  <Route path="/" component={Voting} />
</Route>;

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);