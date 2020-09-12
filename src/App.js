import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';
// import HomeWork1 from './hw1/components/HomeWork1';
// import HomeWork2 from './hw2/components/HomeWork2';

const HomeWork1 = lazy(() => import('./hw1/components/HomeWork1'));
const HomeWork2 = lazy(() => import('./hw2/components/HomeWork2'));
const routes = {
  homeWork1: {
    name: 'Home Work 1',
    path: '/home-work/1'
  },
  homeWork2: {
    name: 'Home Work 2',
    path: '/home-work/2'
  }
}

function App() {
  return (
    <Router>
      <Menu>
        <Menu.Item
          name={routes.homeWork1.name}
          to={routes.homeWork1.path}
          as={NavLink} activeClassName="active"
        />
        <Menu.Item
          name={routes.homeWork2.name}
          to={routes.homeWork2.path}
          as={NavLink} activeClassName="active"
        />
      </Menu>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Redirect to={routes.homeWork1.path} />
          </Route>
          <Route path={routes.homeWork1.path}>
            <HomeWork1 />
          </Route>
          <Route path={routes.homeWork2.path}>
            <HomeWork2 />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;