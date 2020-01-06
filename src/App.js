import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import About from './modules/About';
import Articles from './modules/Articles';
import Portfolio from './modules/Portfolio';
import Contact from './modules/Contact';
import './App.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <div className="contentContainer">
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/articles" component={Articles} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
