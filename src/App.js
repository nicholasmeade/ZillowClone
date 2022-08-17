import "./App.css";
import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import logo from "./Assets/logo.png";

function App() {
  return (
    <div className="App">
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
      {/* <Nav
      className="navbar" 
      fill 
      justified
      >
        <NavItem>
          <NavLink active href="#">Buy</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Rent</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Sell</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Home Loans</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Agent Finder</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="zillowlogo" href="#"><img src={logo} alt="Zillow Icon" width="180px" /></NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Manage Rentals</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Advertise</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Help</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Sign In</NavLink>
        </NavItem>
      </Nav> */}
    </div>
  );
}

export default App;
