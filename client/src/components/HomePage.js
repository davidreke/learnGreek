import React, { Component } from 'react'

export default class HomePage extends Component {
    render() {
        return (
            <div className="pt-20" id="frontpage">
                <div id="about" className="front-panel">
                    <h2>About</h2>
                    <p lang="el">Mimnéskó (μιμνήσκομαι) is an app to allow users to quiz themselves on the Koine Greek Language.</p>
                    <p>Mimensko is built using Bootstrap, React.JS, Express.JS, MongoDB, Node.JS, and JWT. The application features mobile-responsiveness and and repition based learning algorithm</p>
                </div>
                <div id="status" className="front-panel">
                    <h2>Current Status</h2>
                    <h3>Completed</h3>
                    <ul>
                        <li>Hosted on Heroku</li>
                        <li>Front-end Setup</li>
                        <li>Fully function Node.JS backend with JWT authentication, Express, and MongoDB</li>
                    </ul>
                    <h3>Next Steps</h3>
                    <ul>
                        <li>Implement front-end regisration and login</li>
                    </ul>
                </div>
            </div>
        )
    }
}
