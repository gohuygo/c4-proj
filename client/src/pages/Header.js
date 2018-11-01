import React from 'react';
import { Menu } from 'semantic-ui-react';

export default () => {
  return(
    <Menu>
      <Menu.Item>Company Name</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>Help</Menu.Item>
      </Menu.Menu>
    </Menu>
  )
};
