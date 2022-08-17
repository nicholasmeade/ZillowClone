import "./App.css";
import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
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
              <NavLink disabled href="#">
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
              <NavLink className="zillowlogo" href="#">
                <img src={logo} alt="Zillow Icon" width="180px" />
              </NavLink>
            </NavItem>
          </Nav>
        </li>
        <li>
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
      </div>
    </div>
  );
}

export default App;
