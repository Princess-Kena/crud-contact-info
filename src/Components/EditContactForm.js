import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'; 
import {connect} from 'react-redux';
import {editUser} from '../actions/contactsActions'

class EditContactForm extends Component {
    constructor(props){
        super(props);
        this.state={

            name: props.userInfo.name,
            number: props.userInfo.number,
            address: props.userInfo.address,
            type: props.userInfo.address,
            id: props.userInfo.id 

        }
    }
    handlechange = (e) =>{
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    handleSubmit =(e) =>{
        e.preventDefault();
        this.props.updateUser(this.state);
        this.setState({
            name: "",
            number: "",
            address: "",
            type:"",
            id: ""

        });
        this.props.closeModal()
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit} >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name"
                     onChange={this.handlechange} value={this.state.name} />
                    
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="number" placeholder="Enter number" name="number" 
                    onChange={this.handlechange} value={this.state.number} />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" name="address"
                     onChange={this.handlechange} value={this.state.address} />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Type</Form.Label>
                    <Form.Control type="text" placeholder="Type" name="type"
                     onChange={this.handlechange} value={this.state.type} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>
        );
    }
}
const mapDispatchToProps ={
    updateUser: editUser
    
}

export default connect(null, mapDispatchToProps) (EditContactForm);

