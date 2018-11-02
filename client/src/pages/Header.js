import React from 'react';
import { Menu } from 'semantic-ui-react';

export default(props) => {
  return(
    <Menu>
      <Menu.Item>Company Name</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>{props.account ? props.account : ''}</Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

