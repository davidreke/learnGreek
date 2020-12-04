import React from 'react'

export default function navbar() {
    return (
        
        <nav className="navbar navbar-expand leg navbar-dark bg-charcoal">
            <div className="container">
                <a href="/" className="navbar-brand">Mimnéskó</a>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a href="" className="nav-link">Login</a>
                    </li>
                    <li className="nav-item active">
                        <a href="" className="nav-link">Register</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        
    )
}
