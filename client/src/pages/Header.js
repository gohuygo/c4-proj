import React from 'react';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components'

export default(props) => {
  let account = props.account ? `${props.account.slice(0, 7)}...${props.account.slice(-3)}` : ''

  const MenuWrapper = styled.div`
    border-bottom: 1px solid #e6e4e4;
  `

  return(
    <MenuWrapper>
      <Menu secondary size="large">
        <Menu.Item><a href="/">Our Bond Company</a></Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>{account}</Menu.Item>
        </Menu.Menu>
      </Menu>
    </MenuWrapper>
  )
}

