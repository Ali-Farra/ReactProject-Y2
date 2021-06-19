import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import HeroTwo from './componentsTwo/HeroTwo'
import Ideas from './components/Ideas';
import IdeasTwo from './componentsTwo/IdeasTwo';
import { ideaData } from './components/Ideas/data';
import { ideaTwoData } from './componentsTwo/IdeasTwo/data';


function App() {

  return (
    <Router>

      <Switch>
      <Route path="/"exact>
        <GlobalStyle />
        <Hero />
        {/* <Route path="/Ideas"> */}
          <Ideas heading='WHAT IF ‽' data={ideaData} />
        {/* </Route> */}
      </Route>

      <Route path="/Sports">
        <GlobalStyle />
        <HeroTwo />
        <Route path="/Sports/Ideas">
          <IdeasTwo heading='DID YOU KNOW ‽' data={ideaTwoData} />
        </Route>
      </Route>
      </Switch>

    </Router>
  );
}

export default App;
