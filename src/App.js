import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import About from './modules/About';
import Articles from './modules/Articles';
import Portfolio from './modules/Portfolio';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
