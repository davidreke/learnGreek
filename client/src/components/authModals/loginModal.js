import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert 
}from 'reactstrap'

export default class LoginModal extends Component {
    
    state={
        modal: false
    }

    toggle = (e) => {
        e.preventDefault();
        this.setState(
            {modal: !this.state.modal}
        )
    }

    render() {
        return (
            <div>
                <NavLink onClick={this.toggle} href='#'>
                    Login
                </NavLink>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    {this.state.msg ? <Alert color='danger'>{this.state.msg}</Alert> : null }
                    <ModalHeader
                    toggle={this.toggle}>
                        Register
                    </ModalHeader>
                    <ModalBody>
                        <Alert color='danger'>
                            Login Modal currently not funcitoning/connected to backend
                        </Alert>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input 
                                    type='email'
                                    name='email'
                                    id='email'
                                    placholder='Email'
                                    onChange = {this.onChange}
                                    className = "mb-3"
                                />
                                <Label for="Password">Password</Label>
                                <Input 
                                    type='password'
                                    name='password'
                                    id='password'
                                    placholder='password'
                                    onChange = {this.onChange}
                                    className = "mb-3"
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >
                                    Register
                                </Button>
                            </FormGroup>
                        </Form>   
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}