import React from 'react';
import { Menu } from 'semantic-ui-react';

export default(props) => {
  let account = props.account ? `${props.account.slice(0, 7)}...${props.account.slice(-3)}` : ''

  return(
    <Menu>
      <Menu.Item>Our Bond Company</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>{account}</Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

