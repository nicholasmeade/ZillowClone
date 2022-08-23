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
                <h4>I do not work for, or are affiliated with Zillow. You can view Zillow's official website <a href="https://www.zillow.com/" target="blank">here</a>.</h4>
                <h4>Progress is ongoing. Visit back for future features to be rolled out.</h4>
            </div>
            <hr></hr>
            <div className="clone-creation">
                <h3>This clone of Zillow's website was created using...</h3>
                <ul>
                    <li>React</li>
                    <li>Reactstrap</li>
                    <li>Datafiniti Property Data API</li>
                    <li>Google Maps API</li>
                </ul>
            </div>
            <hr></hr>
            <div className="upcoming-features">
                <h3>Upcoming features include:</h3>
                <ul>
                    <li>Finishing buy section implementing data from <a href="https://datafiniti.co/" target="blank">Datafiniti's</a> Property Data API.</li>
                    <li>Implement markers with Google Maps API with data received back from <a href="https://datafiniti.co/" target="blank">Datafiniti's</a> Property Data API.</li>
                    <li>Build out search bar funtionality on home page to lead into buy section.</li>
                    <li>Build out rent section following completion of buy section.</li>
                </ul>
            </div>
            <div className="about-footer">
                <h4>You can find me on <a href="https://github.com/nicholasmeade" target="blank">Github</a> and connect with me on <a href="https://www.linkedin.com/in/nicholas-meade-se/" target="blank">LinkedIn</a>.</h4>
            </div>
        </div>
        </div>
     );
}

export default About;