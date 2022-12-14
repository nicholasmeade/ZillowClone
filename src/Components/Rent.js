import React from "react";
import { Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import logo from "../Assets/logo.png";

const Rent = () => {
    return ( 
        <div>
            <ul className="nav-container">
            <li>
            <Nav className="me-2" fill justified>
                <NavItem>
                <NavLink active href="/ZillowClone/#/homes">
                    Buy
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink active href="/ZillowClone/#/homes/for_rent">
                    Rent
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink disabled href="#">
                    Sell
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink disabled href="#">
                    Home Loans
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink disabled href="#">
                    Agent Finder
                </NavLink>
                </NavItem>
            </Nav>
            </li>
            <li>
            <Nav>
                <NavItem>
                <NavLink className="zillowlogo" href="/ZillowClone/#/">
                    <img src={logo} alt="Zillow Icon" width="180px" />
                </NavLink>
                </NavItem>
            </Nav>
            </li>
            <li className="me-2">
            <Nav>
                <NavItem>
                <NavLink disabled href="#">
                    Manage Rentals
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink disabled href="#">
                    Advertise
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink disabled href="#">
                    Help
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink disabled href="#">
                    Sign In
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink exact href="/ZillowClone/#/about">
                    About
                </NavLink>
                </NavItem>
            </Nav>
            </li>
        </ul>
            <h2>Here's the Rent page - coming soon.</h2>
        </div>
     );
}
 
export default Rent;