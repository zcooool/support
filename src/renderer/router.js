import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './pages/IndexPage';
import ProjectPage from './pages/ProjectPage';


//设置路由，通过路径执行不同的路径
function RouterConfig({ history }) {
  return (
    <Router history={history}>
       <Route path='/' component={ProjectPage} />
       <Route path='/index' component={IndexPage} />
    </Router>
  );
}

export default RouterConfig;
