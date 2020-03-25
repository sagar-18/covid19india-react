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
import Banner from './components/banner';

const history = require('history').createBrowserHistory;

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  const toggleTheme = (oldTheme) => {
    const newTheme = oldTheme === 'light'? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={ theme == 'dark'? 'App theme--dark' : 'App theme--light' } >
      <div className="container">
        <Router history={history}>
          <Route render={({location}) => (
            <div className="Almighty-Router">
              <Navbar theme = { theme } toggleTheme={ toggleTheme } />
              <Banner />
              <Route exact path="/" render={() => <Redirect to="/" />} />
              <Switch location={location}>
                <Route exact path="/" render={(props) => <Home {...props}/>} />
                <Route exact path="/links" render={(props) => <Links {...props}/>} />
                <Route exact path="/summary" render={(props) => <Summary {...props}/>} />
                <Route exact path="/clusters" render={(props) => <Cluster {...props}/>} />
                <Route exact path="/faqs" render={(props) => <FAQ {...props}/>} />
              </Switch>
            </div>
          )}
          />
        </Router>
        <footer className="fadeInUp" style={{animationDelay: '2s'}}>
          <img src="/icon.png" alt="logo"/>
          <h5>We stand with everyone fighting on the frontlines</h5>
          <div className="link">
            <a href="https://github.com/covid19india">covid19india</a>
          </div>
          <div id='footerButtons'>
            <a className="button" href="https://bit.ly/patientdb" target="_noblank">
              <Icon.Database /><span>Crowdsourced Patient Database&nbsp;</span>
            </a>
            <a href="https://bit.ly/covid19crowd" className="button telegram" target="_noblank">
              <Icon.MessageCircle />
              <span>Join Telegram to Collaborate!</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
