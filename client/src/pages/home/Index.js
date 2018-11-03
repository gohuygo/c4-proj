import React, { Component } from 'react';
import styled from 'styled-components'

// TODO: Remove when no longer needed for reference
import ReadString from './ReadString';
import SetString from './SetString';

const BlueBackgroundContainer = styled.div `
  background-color: #394cb5;
  height: 420px;
`

class HomeIndex extends Component {
  state = { loading: true, drizzleState: null };

  componentDidMount() {
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
    return(
      <BlueBackgroundContainer>
        <div class="ui vertical masthead center aligned segment">
          <div class="ui text container">
            <h1 class="ui inverted header">
              Imagine-a-Company
            </h1>
            <h2>
              Do whatever you want when you want to.
            </h2>
          </div>
        </div>
      </BlueBackgroundContainer>
    )
  }
}

export default HomeIndex;
