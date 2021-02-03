import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Contacts from './Components/Contacts';
import AddContactForm from './Components/AddContactForm';


class App extends Component {
  
 /* addNewUser = (user) => {
    user.id = Math.random().toString()
    this.setState({
      users: [...this.state.users, user]
    })
  }*/
 /* deleteUser = (id) => {
    let undeletedUsers = this.state.users.filter(user => user.id !== id);
    this.setState({
      users: undeletedUsers
    })
  }
  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map(user => user.id === id ? updatedUser : user)
    })
  }*/
  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4"><AddContactForm  /></Col>
            <Col>
            <Contacts  />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;


