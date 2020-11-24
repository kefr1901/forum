import React from 'react'
import GetUserInfo from './GetUserInfo'

export default function Navbar() {
    return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark w-100">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/Posts">Posts</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/Postcreate">Create a Post</a>
                        </li>
                        <li className="nav-item ml-auto active">
                            <a className="navbar-brand" href="#"><GetUserInfo/></a>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}
