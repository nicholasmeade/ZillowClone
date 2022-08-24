import React from "react";
import { Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import logo from "../Assets/logo.png";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import ListingSearch from "./ListingSearch";
import { Link } from "react-router-dom";

const Buy = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    if (!isLoaded) {
        return <div>Loading...</div>
    }

    // // API parameters - test

    // var API_token = process.env.REACT_APP_DATAFINITI_API_KEY
    // var format = 'JSON'
    // var query = 'country:US'
    // var num_records = 1
    // var download = false

    // var request_options = {
    //     url: 'https://api.datafiniti.co/v4/properties/search',
    //     method: 'POST',
    //     json: {
    //         'query': query,
    //         'format': format,
    //         'num_records': num_records,
    //         'download': download
    //     },
    //     headers: {
    //         'Authorization': 'Bearer ' + API_token,
    //         'Content-Type': 'application/json'
    //     } 
    // }

    // console.log(request_options)

    // fetch(request_options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    
    // fetch(request_options, function(error, response, body) {
    //     if (error) {
    //         console.log(error)
    //         console.log(response)
    //     } else {
    //         console.log(body)
    //     }
    // })

    return ( 
        <div>
            <ul className="nav-container">
            <li>
            <Nav className="me-2" fill justified>
                <NavItem>
                <NavLink active href="/#/homes">
                    Buy
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink active href="/#/homes/for_rent">
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
                <NavLink className="zillowlogo" href="/#/">
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
                <NavLink exact href="/#/about">
                    About
                </NavLink>
                </NavItem>
            </Nav>
            </li>
        </ul>
        <ListingSearch />
        <div className="lower-section-container">
            <div className="map-search-container">
                <h2>Search results will be displayed here in a future update utilizing data from <a href="https://datafiniti.co/" target="blank">Datafiniti's</a> Property Data API. Future plans in the <Link to="/about">About</Link> section.</h2>
            <GoogleMap zoom={8} center={{lat: 41, lng: -74}} mapContainerClassName="map-container" ></GoogleMap>
            </div>
        </div>
        </div>
     );
}

export default Buy;