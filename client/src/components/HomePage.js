import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap'

export default class HomePage extends Component {
    render() {
        return (
            <Row className="pt-20" id="frontpage">
                <Col sm="12" md='6'  id="about" className="front-panel">
                    <h2>About</h2>
                    <p lang="el">Mimnéskó (μιμνήσκω) is an app to allow users to quiz themselves on the Koine Greek Language.</p>
                    <p>Mimensko is built using Bootstrap, React.JS, Express.JS, MongoDB, Node.JS, and JWT. The application features mobile-responsiveness and and repition based learning algorithm</p>
                </Col>
                <Col sm="12" md='6' id="status" className="front-panel">
                    <h2>Current Status</h2>
                    <h3>Next Steps</h3>
                    <ul>
                        <li>Connect Login and Registration Modals to backend</li>
                    </ul>
                    <h3>Completed</h3>
                    <ul>
                        <li>Login and Registration Modals added</li>
                        <li>Front page optimized for mobile devices</li>
                        <li>Hosted on Heroku</li>
                        <li>Front-end Setup</li>
                        <li>Fully function Node.JS backend with JWT authentication, Express, and MongoDB</li>
                    </ul>
                    
                </Col>
            </Row>
        )
    }
}
