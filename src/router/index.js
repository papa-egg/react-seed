import React, { lazy, Suspense } from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

// auto generated routes start
const Home = Loadable({
  loader: () => import('@/pages/home/Home'),
  loading: () => '',
});

const ReduxDemo = Loadable({
  loader: () => import('@/pages/redux-demo/ReduxDemo'),
  loading: () => '',
});

const RouterDemo = Loadable({
  loader: () => import('@/pages/router-demo/RouterDemo'),
  loading: () => '',
});

const routers = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/redux-demo',
    component: ReduxDemo,
  },
  {
    path: '/router-demo',
    component: RouterDemo,
  },
];

// auto generated routes end
const RouteConfig = (
  <HashRouter>
    <Switch>
      {
        routers.map((route, index) => (
          <Route
            key={ index }
            path={ route.path }
            component={ route.component }
          />
        ))
      }
    </Switch>
  </HashRouter>
);

export default RouteConfig;
