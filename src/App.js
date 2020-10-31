
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Contacts from './Components/Contacts';
import AddContactForm from './Components/AddContactForm';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          name: "Michael Ackortia",
          number: "0243000000",
          address: "Awoshie-Accra",
          type :"Friend",
          id: "ggnikt668"
        },
        {
          name: "Princess Kena",
          number: "0551567537",
          address: "Kasoa-Accra",
          type: "Family",
          id: "bdhfj4i75"
        },
        {
          name: "Rose Issakah",
         number: "0557566267",
         address: "Akotsi-C/R",
          type: "Classmate",
          id: "rgfmhfu68,"
        },
        {
          name: "Keziah Obiri",
          number: "0248345631",
          address: "Tafo-E/R",
          type:"Cousin",
          id: "ghyegn364587"
        },
      ]
    }
  }
  addNewUser = (user) => {
    user.id = Math.random().toString()
    this.setState({
      users: [...this.state.users, user]
    })
  }
  deleteUser = (id) => {
    let undeletedUsers = this.state.users.filter(user => user.id !== id);
    this.setState({
      users: undeletedUsers
    })
  }
  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map(user => user.id === id ? updatedUser : user)
    })
  }
  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4"><AddContactForm addUser={this.addNewUser} /></Col>
            <Col><Contacts usersData={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;


