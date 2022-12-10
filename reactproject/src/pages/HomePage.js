import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import UserListComponent from '../component/UserListComponent';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: "Batuhan",
          surname: "Salkım",
          username: "batusalkım",
        },
        {
          id: 2,
          name: "Tunahan",
          surname: "Salkım",
          username: "tunasalkım",
        },
        {
          id: 3,
          name: "Necla",
          surname: "Salkım",
          username: "neclasalkım",
        },
        {
          id: 4,
          name: "Mustafa",
          surname: "Salkım",
          username: "mustafasalkim",
        },
        {
          id: 5,
          name: "Yaren",
          surname: "Salkım",
          username: "yarensalkim",
        },
      ]
    }
  }
  render() {
    return (
      <div>
        <Navbar color='light' expand="md" light>
          <div className='container'>
            <NavbarBrand href='/'>react-intro</NavbarBrand>
          </div>
        </Navbar>
        <UserListComponent users={this.state.users} />
      </div>
    );
  }
}

