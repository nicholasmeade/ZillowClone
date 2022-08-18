import "./App.css";
import React from "react";
import { Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import logo from "./Assets/logo.png";
import house from "./Assets/house.jpg";

function App() {
  return (
    <div className="App">
      <div className="header">
      <ul className="nav-container">
        <li>
          <Nav className="me-2" fill justified>
            <NavItem>
              <NavLink active href="#">
                Buy
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active href="#">
                Rent
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active href="#">
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
              <NavLink className="zillowlogo" href="#">
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
          </Nav>
        </li>
      </ul>
      <div className="slogan">
        <h2>Find it. Tour It. Own it.</h2>
      </div>
      </div>
      <div className="homes-for-you-container">
          <div className="homes-card-container">
            <h3>Homes For You</h3>
            <hr class="solid"></hr>
            <div className="house-cards">
                <Card
                    color="light"
                    style={{
                    width: '18rem',
                    }}>
                  <img
                  alt="Sample"
                  src="https://picsum.photos/300/200"/>
              <CardBody>
                <CardTitle tag="h5">
                  $1,000,000
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6">
                  4bds | 5ba | 5,000 sqft
                </CardSubtitle>
                <CardText>
                  Long Island, NY
                </CardText>
              </CardBody>
              </Card>
              <Card
                    color="light"
                    style={{
                    width: '18rem',
                    }}>
                  <img
                  alt="Sample"
                  src="https://picsum.photos/300/200"/>
              <CardBody>
                <CardTitle tag="h5">
                  $2,000,000
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6">
                  3bds | 4ba | 4,000 sqft
                </CardSubtitle>
                <CardText>
                  Los Angeles, California
                </CardText>
              </CardBody>
              </Card>
              <Card
                    color="light"
                    style={{
                    width: '18rem',
                    }}>
                  <img
                  alt="Sample"
                  src="https://picsum.photos/300/200"/>
              <CardBody>
                <CardTitle tag="h5">
                  $5,000,000
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6">
                  3bds | 3ba | 3,000 sqft
                </CardSubtitle>
                <CardText>
                  New York City, NY
                </CardText>
              </CardBody>
              </Card>
            </div>
          </div>
      </div>
      <div className="house-options">
        <p>Buy a home. Finance a home. Rent a home.</p>
      </div>
    </div>
  );
}

export default App;
