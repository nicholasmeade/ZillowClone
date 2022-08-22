import React from "react";
import { Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import logo from "../Assets/logo.png";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Buy = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    if (!isLoaded) {
        return <div>Loading...</div>
    }

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
        <div>
            <p>Here is the Buying Homes page.</p>  
        </div>
        <div>
        <GoogleMap zoom={9} center={{lat: 41, lng: -74}} mapContainerClassName="map-container" ></GoogleMap>
        </div>
        </div>
     );
}
 
export default Buy;