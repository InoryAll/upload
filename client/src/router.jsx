/**
 * 路由规则
 * Created by tianrenjie on 2017/11/9
 */
import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import App from './App';
import Main from './main/main';

export const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
    </Route>
  </Router>
);
