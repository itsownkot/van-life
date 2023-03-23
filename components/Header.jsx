import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function logout() {
        localStorage.removeItem('loggedIn')
    }
    
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink 
                    to="/host"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink 
                    to="/about"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink 
                    to="/vans"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                {localStorage.getItem('loggedIn') === 'true' ?
                    <button onClick={logout} className="logout-button">Logout</button>
                    : (
                        <Link to='login' className="login-link">
                            <img
                                src="../assets/images/avatar-icon.png"
                                alt='login icon'
                                className="login-icon"
                            />
                        </Link>
                    )
                }
            </nav>
        </header>
    )
}