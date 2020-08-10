import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

export default function NavBar({ setFormOpen }) {
  return (
    <Menu fixed='top'>
      <Container>
        <Menu.Item header>
          <img src='/assets/logo.png' alt='logo' />
          Re-Vents
        </Menu.Item>
        <Menu.Item>
          <Button
            onClick={() => setFormOpen(true)}
            positive
            content='add event'
          />
        </Menu.Item>
        <Menu.Item position='right'>
          <Button basic content='login' />
          <Button basic content='register' />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
