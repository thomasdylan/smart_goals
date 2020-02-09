import React, {useState} from "react";
import {useAuth0} from "../react-auth0-spa";
import {Link} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

const NavBar = () => {
    const {isAuthenticated, loginWithRedirect, logout} = useAuth0();

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="full-nav-bar" color="light" light expand="md">
                <NavbarBrand> 
                    <Link to="/home" className="nav-text"><img className="brand-image" src="https://s3.amazonaws.com/designmantic-logos/logos/2020/Feb/small-8882-5e35ab1e710a9.png" alt="smart goals" /></Link>&nbsp;
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>                          
                    {isAuthenticated && (
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Link to="/home" className="nav-text">Home</Link>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </NavItem> 
                            <NavItem> 
                                <Link to="/profile" className="nav-text">Profile</Link>&nbsp;
                            </NavItem>
                        </Nav>
                    )}                       
                    <NavbarText className="nav-button">
                        {!isAuthenticated && (
                            <button
                                type="button"
                                className="btn btn-light login-button"
                                onClick={() => loginWithRedirect({})}>Log in | Sign up
                            </button>
                        )} 
                        {isAuthenticated && 
                            <button
                                type="button"                          
                                className="btn btn-light"
                                onClick={() => logout()}>Log out
                            </button>
                        }
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;