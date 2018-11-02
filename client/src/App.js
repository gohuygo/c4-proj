import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Layout from './pages/Layout';
import HomeIndex from './pages/home/Index';
import CityShow from './pages/city/Show';
import IndividualShow from './pages/individual/Show';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <div>
            <Route path="/" exact render={ (props) => <HomeIndex drizzle={this.props.drizzle } />} />
            <Route path="/individual" component={IndividualShow} />
            <Route path="/city" component={CityShow} />
          </div>
        </Layout>
      </Router>
    );
  }
}

export default App;
