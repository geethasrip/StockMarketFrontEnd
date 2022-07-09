import { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";
class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthService.isUserLoggedIn();

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <ul className="navbar-nav navbar-collapse justify-content-center">
                    {isUserLoggedIn && <li><Link className="nav-link" to="/home">Home</Link></li>}
                    {isUserLoggedIn && <li><Link className="nav-link" to="/registerCompany">RegisterCompany</Link></li>}
                    {isUserLoggedIn && <li><Link className="nav-link" to="/addStock" >AddStock</Link></li>}
                    </ul>  
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthService.logout}>Logout</Link></li>}
                    </ul>
                   

                </nav>
            </header>
        )
    }
}

export default HeaderComponent