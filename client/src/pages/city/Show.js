import React, { Component } from 'react';
import { Button, Icon, Container, Menu, Card } from 'semantic-ui-react'
import CreateBondModal from './CreateBondModal';

class CityShow extends Component {
  state = {
    isCityDataKey: null,
    getBondsDataKey: [],
    getNumberOfBondsDataKey: null,
  }
  componentDidMount() {
    const { drizzle } = this.props;
    const cityContract = drizzle.contracts.City;

    const isCityDataKey = cityContract.methods["isCity"].cacheCall();
    const getNumberOfBondsDataKey = cityContract.methods["getNumberOfBonds"].cacheCall();

    this.setState({ isCityDataKey, getNumberOfBondsDataKey});
  }

  requestBonds(){
    const { City } = this.props.drizzleState.contracts;
    const cityContract = this.props.drizzle.contracts.City;

    const getBondsRequest = City.getNumberOfBonds[this.state.getNumberOfBondsDataKey];
    const numberOfBonds = getBondsRequest ? getBondsRequest.value : 0;

    for(let i = 1; i <= numberOfBonds; i++){

      let dataKey = cityContract.methods["getBond"].cacheCall(i);
      this.state.getBondsDataKey.push(dataKey)
    }
  }

  getBonds = () => {
    const dataKeys = this.state.getBondsDataKey
    if(dataKeys.length === 0){
      this.requestBonds()
    }else{
      let bonds = []
      const { City } = this.props.drizzleState.contracts;

      for(let i = 0; i < dataKeys.length; i++){
        let key = dataKeys[i]
        let resultPromise = City.getBond[key]

        let result = resultPromise ? resultPromise.value : false;
        if(result){
          bonds.push({
            header: result.name,
            description: `Total Tokens: ${result.totalTokensSupply} ${result.tokenSymbol}`,
            extra: '',
            meta: result.status
          })
        }
      }
      return bonds
    }
  }

  isCity() {
    const { City } = this.props.drizzleState.contracts;

    const isCityRequest = City.isCity[this.state.isCityDataKey];
    return isCityRequest ? isCityRequest.value : false;
  }

  openBondModal = () => {
    this.createBondModal.handleOpen();
  }

  renderCardGroup = () => {
    return <Card.Group items={this.getBonds()} />
  }


  render() {

    return(
      <Container>

        <br/>
        <Menu tabular>
          <Menu.Item name='Create Bonds' active={true}/>
          <Menu.Item name='Manage Bonds' active={false} />
        </Menu>

        <Button floated="right" color='green' onClick={this.openBondModal} inverted>
          <Icon name='plus'/> New
        </Button>

        <br/>

        {this.renderCardGroup()}

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
