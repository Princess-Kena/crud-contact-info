import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'; 

class AddContactForm extends Component {
    constructor(props){
        super(props);
        this.state={

            name: "",
            phoneNumber: "",
            address: "",
            type:"" 
        }
    }
    handlechange = (e) =>{
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        this.props.addUser(this.state)
        this.setState({
            name: "",
            number: "",
            address: "",
            type:""   

        });
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
                    <Form.Label>Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter phone-number" name="number" 
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

export default AddContactForm;
