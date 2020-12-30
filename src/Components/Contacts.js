import React from 'react';
import {connect} from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import Contact from './Contact';

const Contacts = (props) => {
    return (
        <Container>
            <Row>
                {
                    props.usersData.map((user) => {
                        return ( <Contact userInfo={user} key={user.id}
                        deleteUser={props.deleteUser} editUser={props.editUser}/>

                    )
                    })
                }
            </Row>
        </Container>


    );
};
const mapStateToProps =(state) =>({
    usersData : state.users
    })

export default connect(mapStateToProps)(Contacts);
