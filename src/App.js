import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import HomeWork1 from './hw1/components/HomeWork1';
import HomeWork2 from './hw2/components/HomeWork2';
import HomeWork3 from './hw3/components/HomeWork3';
import HomeWork4 from './hw4/components/HomeWork4';
import HomeWork5 from './hw5/components/HomeWork5';
import HomeWork6 from './hw6/components/HomeWork6';

const routes = {
  home: {
    name: 'home',
    path: '/'
  },
  homeWork1: {
    name: 'Home Work 1',
    path: '/home-work/1'
  },
  homeWork2: {
    name: 'Home Work 2',
    path: '/home-work/2'
  },
  homeWork3: {
    name: 'Home Work 3',
    path: '/home-work/3'
  },
  homeWork4: {
    name: 'Home Work 4',
    path: '/home-work/4'
  },
  homeWork5: {
    name: 'Home Work 5',
    path: '/home-work/5'
  },
  homeWork6: {
    name: 'Home Work 6',
    path: '/home-work/6'
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
        <Menu.Item
          name={routes.homeWork3.name}
          to={routes.homeWork3.path}
          as={NavLink} activeClassName="active"
        />
        <Menu.Item
          name={routes.homeWork4.name}
          to={routes.homeWork4.path}
          as={NavLink} activeClassName="active"
        />
        <Menu.Item
          name={routes.homeWork5.name}
          to={routes.homeWork5.path}
          as={NavLink} activeClassName="active"
        />
        <Menu.Item
          name={routes.homeWork6.name}
          to={routes.homeWork6.path}
          as={NavLink} activeClassName="active"
        />
      </Menu>
      <Switch>
        <Route exact path={routes.homeWork1.path}>
          <HomeWork1 />
        </Route>
        <Route exact path={routes.homeWork2.path}>
          <HomeWork2 />
        </Route>
        <Route exact path={routes.homeWork3.path}>
          <HomeWork3 />
        </Route>
        <Route path={routes.homeWork5.path}>
          <HomeWork5 />
        </Route>
        <Route path={routes.homeWork4.path}>
          <HomeWork4 />
        </Route>
        <Route path={routes.homeWork6.path}>
          <HomeWork6 />
        </Route>
        <Route path={routes.home.path}>
          <Redirect to={routes.homeWork1.path} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;