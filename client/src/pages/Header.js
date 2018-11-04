import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components'

const MenuWrapper = styled.div`
  border-bottom: 1px solid #e6e4e4;
`
const Logo = styled.p`
  font-size:20px;
  color: black;
  text-decoration: none;
`

class Header extends Component {
  state = { dataKey: null }

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.City;

    // let drizzle know we want to watch the `myString` method
    const dataKey = contract.methods["isCity"].cacheCall();

    // save the `dataKey` to local component state for later reference
    this.setState({ dataKey });
  }

  render() {
    const { City } = this.props.drizzleState.contracts;

    const { account } = this.props;
    let truncatedAccount = account ? `${account.slice(0, 7)}...${account.slice(-3)}` : ''

    const request = City.isCity[this.state.dataKey];
    const isCity = request ? request.value : '';

    return(
      <MenuWrapper>
        <Menu secondary size="large">
          <Menu.Item>
            <a href="/">
              <Logo>MUniverse</Logo>
            </a>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>{truncatedAccount}</Menu.Item>
            <Menu.Item>{String(isCity)}</Menu.Item>

          </Menu.Menu>
        </Menu>
      </MenuWrapper>
    )
  }

}

export default Header;
