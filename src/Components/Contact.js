import React,{useState} from 'react';
import { Card, Col,  Button, Modal } from 'react-bootstrap';
import EditContactForm from './EditContactForm';
import {connect} from 'react-redux';
import {deleteUser} from '../actions/contactsActions'

const Contact = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  
    const handleDelete =(e) =>{
        e.preventDefault();
        props.deleteUser(props.userInfo.id);
    }
    return (
        <>
              <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditContactForm userInfo={props.userInfo} editUser={props.editUser} closeModal={handleClose}/>
        </Modal.Body>

      </Modal>
        <Col md="4" style={{marginBottom:"1rem"}}>
        <Card>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Codetrain User</Card.Subtitle>
                <Card.Title>{props.userInfo.name}</Card.Title>
                <Card.Text>
                    <p>Number:{ props.userInfo.number}</p>
                    <p>Address: {props.userInfo.address}</p>
                    <p>Type: {props.userInfo.type}</p>
                </Card.Text>
                <Card.Link href="#" onClick={handleShow}>Edit</Card.Link>
                <Card.Link href="#"><Button variant="danger" size="sm" onClick={handleDelete}>
                    Delete</Button></Card.Link>
            </Card.Body>
        </Card>
        </Col>
        </>
    );
}
const mapDispatchToProps ={
    deleteUser: deleteUser
} 

export default connect(null, mapDispatchToProps) (Contact);
