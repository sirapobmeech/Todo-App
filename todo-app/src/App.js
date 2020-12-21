import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import './assets/style/main.css'
import NotFound from './containers/NotFound';

function App() {
  const renderRouter = () => { // function for switching page
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    )
  }
  return (
    <BrowserRouter > {renderRouter()}</BrowserRouter >
  );
}

export default App;
