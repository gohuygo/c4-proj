import React, { Component } from 'react';
import { Button, Icon, Container } from 'semantic-ui-react'
import CreateBondModal from './CreateBondModal';

class CityShow extends Component {
  componentDidMount() {
    const { drizzle } = this.props;
    const cityContract = drizzle.contracts.City;

    const isCityDataKey = cityContract.methods["isCity"].cacheCall();

    this.setState({ isCityDataKey });
  }

  isCity() {
    const { City } = this.props.drizzleState.contracts;

    const isCityRequest = City.isCity[this.state.isCityDataKey];
    return isCityRequest ? isCityRequest.value : false;
  }

  openBondModal = () => {
    console.log("hi")
    this.createBondModal.handleOpen();
  }

  render() {
    return(
      <Container>
          <br/>
          <Button floated="right" color='green' onClick={this.openBondModal} inverted>
            <Icon name='plus'/> New
          </Button>

      <CreateBondModal
        ref={ instance => { this.createBondModal = instance } }
        drizzle={ this.props.drizzle }
        drizzleState={ this.props.drizzleState }
      />
      </Container>
    )
  }
}

export default CityShow;
