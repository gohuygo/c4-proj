import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from './pages/Layout';
import HomeIndex from './pages/home/Index';
import CityShow from './pages/city/Show';
import IndividualShow from './pages/individual/Show';

class App extends Component {
  state = {
    drizzleState: null,
    loading: true,
    account: null,
  }

  componentWillMount() {
    const { drizzle } = this.props;

    // subscribe to changes in the store
    this.unsubscribe = drizzle.store.subscribe(() => {

      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();

      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({
          loading: false,
          account: drizzleState.accounts[0],
          drizzleState
        });
      }
    });
  }

  compomentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    if (this.state.loading) return "Loading Drizzle...";

    return (
      <Router>
        <Layout account={this.state.account} drizzle={this.props.drizzle} drizzleState={this.state.drizzleState}>

          <Route exact path="/"           render={ (props) => <HomeIndex      drizzle={this.props.drizzle} drizzleState={this.state.drizzleState} />} />
          <Route exact path="/individual" render={ (props) => <IndividualShow drizzle={this.props.drizzle} drizzleState={this.state.drizzleState} />} />
          <Route exact path="/city"       render={ (props) => <CityShow       drizzle={this.props.drizzle} drizzleState={this.state.drizzleState} />} />
        </Layout>
      </Router>
    );
  }
}

export default App;
