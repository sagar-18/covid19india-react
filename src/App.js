import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import * as Icon from 'react-feather';

import './App.scss';
import Home from './components/home';
import Navbar from './components/navbar';
import Links from './components/links';
import Summary from './components/summary';
import Cluster from './components/cluster';
import FAQ from './components/faq';
import Global from './components/global';
import Banner from './components/banner';


const history = require('history').createBrowserHistory;

function App() {
  return (
    <div className="App">

      <Router history={history}>
        <Route render={({location}) => (
          <div className="Almighty-Router">
            <Navbar />
            <Banner />
            <Route exact path="/" render={() => <Redirect to="/" />} />
            <Switch location={location}>
              <Route exact path="/" render={(props) => <Home {...props}/>} />
              <Route exact path="/links" render={(props) => <Links {...props}/>} />
              <Route exact path="/summary" render={(props) => <Summary {...props}/>} />
              <Route exact path="/clusters" render={(props) => <Cluster {...props}/>} />
              <Route exact path="/faqs" render={(props) => <FAQ {...props}/>} />
              <Route exact path="/global" render={(props) => <Global {...props}/>} />

            </Switch>
          </div>
        )}
        />
      </Router>
      <footer className="fadeInUp" style={{animationDelay: '2s'}}>
        <img src="/icon.png" alt="logo"/>
        <h5>Live Dedicated Corona Tracker For India</h5>
        <div className="link">
          <a href="https://india.coronacurfew.live">india.coronacurfew.live</a>

        </div>
        <div id='footerButtons'>
          <a className="button" href="https://india.coronacurfew.live/clusters">
            <Icon.Database /><span>Live India Cluster Database&nbsp;</span>
          </a>
          <a href="https://www.coronacurfew.live" className="button telegram" target="_noblank">
            <Icon.MessageCircle />
            <span>Live Global COVID-19 Tracker</span>
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;
