import React from 'react'
import '../Navbar/navbar.css'


const Navbar = () => {

    return (
            <>
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                <i className="fas fa-tachometer-alt"></i>
                                <span className="text">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/userlist" className="nav-link">
                                <i className="fas fa-user"></i>
                                <span className="text">User List</span>
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="fas fa-eject"></i>
                                <span className="text">Contact us</span>
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a href="/suscriber" className="nav-link">
                                <i className="fas fa-users"></i>
                                <span className="text">Subscribed User</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/graph" className="nav-link">
                            <i class="fa fa-bar-chart" aria-hidden="true"></i>
                                <span className="text">Graph</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/logout" className="nav-link">
                                <i className="fas fa-sign-out-alt"></i>
                                <span className="text">Logout</span>
                            </a>
                        </li>
                    </ul>
                </nav>   
            </>
    )
}

export default Navbar
