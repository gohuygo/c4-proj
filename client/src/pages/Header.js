import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components'

import CitySignupModal from './home/CitySignupModal';

const MenuWrapper = styled.div`
  border-bottom: 1px solid #e6e4e4;
`
const Logo = styled.p`
  font-size:20px;
  color: black;
  text-decoration: none;
`

class Header extends Component {
  state = { isCityDataKey: null }

  componentDidMount() {
    const { drizzle } = this.props;
    const cityContract = drizzle.contracts.City;

    const isCityDataKey = cityContract.methods["isCity"].cacheCall();

    this.setState({ isCityDataKey });
  }

  displayAccountNumber() {
    if(!this.isCity())
      return "City Signup"
    const { account } = this.props;
    return account ? `${account.slice(0, 7)}...${account.slice(-3)}` : ''
  }

  isCity() {
    const { City } = this.props.drizzleState.contracts;

    const isCityRequest = City.isCity[this.state.isCityDataKey];
    return isCityRequest ? isCityRequest.value : false;
  }

  OnAccountNumberClick = () => {
    if(this.isCity())
      return;

    this.citySignupModal.handleOpen();
  }

  render() {
    return(
      <div>
      <MenuWrapper>
        <Menu secondary size="large">
          <Menu.Item>
            <a href="/">
              <Logo>Muniverse</Logo>
            </a>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item onClick={this.OnAccountNumberClick}>{this.displayAccountNumber()}</Menu.Item>
          </Menu.Menu>
        </Menu>
      </MenuWrapper>
      <CitySignupModal
        ref={ instance => { this.citySignupModal = instance } }
        drizzle={ this.props.drizzle }
        drizzleState={ this.props.drizzleState }
      />
      </div>
    )
  }

}

export default Header;
