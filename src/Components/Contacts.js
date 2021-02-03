import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Container, Row } from 'react-bootstrap';
import Contact from './Contact';

const Contacts = (props) => {
    let displayInfo;
    console.log(props.contacts)
    if (props.requesting.contacts) {
        displayInfo = <p>Loading...</p>
    }
     else if (props.requested.contacts && props.contacts.length === 0) {
        displayInfo = <p>No contacts found</p>
    }
    else if (props.requested.contacts && props.contacts.length > 0) {
        displayInfo = props.contacts.map((user) => {
            return (<Contact userInfo={user} key={user.id}
                deleteUser={props.deleteUser} editUser={props.editUser} />

            )
        })
    }

    return (
        <Container>
            <Row>
                {displayInfo}
            </Row>
        </Container>
    );
};
const mapStateToProps = (state) => ({
    usersData: state.contacts,
    contacts: state.firestore.ordered.contacts,
    requesting: state.firestore.status.requesting,
    requested: state.firestore.status.requested
});

export default compose(firestoreConnect(["contacts"]), connect(mapStateToProps))(Contacts);
