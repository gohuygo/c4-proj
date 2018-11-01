import React, { Component } from 'react';
// TODO: Remove when no longer needed for reference
import ReadString from '../ReadString';
import SetString from '../SetString';
class Index extends Component {
  state = { loading: true, drizzleState: null };

  componentDidMount() {
    console.log("HELLO", this.props)
    const { drizzle } = this.props;

    // subscribe to changes in the store
    this.unsubscribe = drizzle.store.subscribe(() => {

      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();

      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });
  }

  compomentWillUnmount() {
    this.unsubscribe();
  }


  render() {
    if (this.state.loading) return "Loading Drizzle...";

    return(
      <div>
        <ReadString
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
        <SetString
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
      </div>
    )
  }
}

export default Index;
