import React, { Component } from 'react'
import { Navbar,NavbarBrand } from 'reactstrap'
import UserListComponent from '../component/UserListComponent';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
            <div className='container'>
                <NavbarBrand href='/'>react-intro</NavbarBrand>
            </div>
        </Navbar>
        <UserListComponent/>
      </div>
    );
  }
}
