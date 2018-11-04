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

  render() {
    const { account } = this.props;
    let truncatedAccount = account ? `${account.slice(0, 7)}...${account.slice(-3)}` : ''

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
          </Menu.Menu>
        </Menu>
      </MenuWrapper>
    )
  }

}

export default Header;
