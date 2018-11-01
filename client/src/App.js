import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Layout from './pages/Layout';
import Index from './pages/Index';

class App extends Component {

  render() {
    return (
      <Layout>
        <Router>
          <div>
          <Route path="/" exact render={ (props) => <Index drizzle={this.props.drizzle } />} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
          </div>
        </Router>
      </Layout>
    );
  }
}

const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

export default App;
