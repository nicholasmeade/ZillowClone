import React from "react";
import { Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import logo from "../Assets/logo.png";

const About = () => {
    return ( 
        <div>
            <ul className="nav-container">
            <li>
            <Nav className="me-2" fill justified>
                <NavItem>
                <NavLink active href="/homes">
                    Buy
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink active href="/homes/for_rent">
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
                <NavLink className="zillowlogo" href="/">
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
                <NavLink exact href="/about">
                    About
                </NavLink>
                </NavItem>
            </Nav>
            </li>
        </ul>
        <div className="about-container">
            <div className="creator-details">
                <h2>This clone of Zillow's website was made by Nicholas Meade, a Full Stack Software Engineer.</h2>
                <h4>You can view Zillow's official website <a href="https://www.zillow.com/" target="blank">here</a>.</h4>
            </div>
            <div className="clone-creation">
                <h3>This clone of Zillow's website was created using...</h3>
                <ul>
                    <li>React</li>
                    <li>Reactstrap</li>
                    <li>DataFiniti Property Data API</li>
                    <li>Google Maps API</li>
                </ul>
            </div>
            <div className="about-footer">
                <h4>You can find me on Github and connect with me on LinkedIn.</h4>
            </div>
        </div>
        </div>
     );
}

export default About;