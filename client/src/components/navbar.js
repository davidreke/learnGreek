import React, {Component} from 'react';
import RegisterModal from './authModals/RegisterModal'
import LoginModal from './authModals/loginModal'
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    Container
} from 'reactstrap'

export default class NavigationBar extends Component {

    state = {
        isOpen: true
    }

    componentDidMount(){
        if(document.documentElement.clientWidth < 767){
            this.setState({
                isOpen: false
            })
        }
    }

    render () {
        return (
        
        <Navbar  className="navbar navbar-expand leg navbar-dark bg-charcoal">
            <Container>
                <NavbarBrand href="/" className="navbar-brand">Mimnéskó</NavbarBrand >

            <Collapse isOpen={this.state.isOpen}>
                <Nav className="ml-auto">
                    <NavItem>
                        <RegisterModal />
                    </NavItem>
                    <NavItem className="nav-item active">
                        <LoginModal />
                    </NavItem>
                </Nav>
            </ Collapse>
            </Container>
        </Navbar>
        
    )
    }
}
