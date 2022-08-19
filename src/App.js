import "./App.css";
import React from "react";
import { Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import logo from "./Assets/logo.png";
import searchicon from "./Assets/searchicon.png";
import buyhome from "./Assets/buyhome.webp";
import financehome from "./Assets/financehome.webp";
import renthome from "./Assets/renthome.webp";
import footerlogo from "./Assets/footer-logo.svg";

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
      <form className="homepage-form">
        <input className="searchbar" type="text" placeholder="Enter an address, neighborhood, city, or ZIP code"></input>
        <button type="submit" className="search-button">
          <img src={searchicon} alt="Search Icon" />
        </button>
      </form>
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
                  $3,000,000
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6">
                  5bds | 5ba | 4,000 sqft
                </CardSubtitle>
                <CardText>
                  Miami, FL
                </CardText>
              </CardBody>
              </Card>
            </div>
          </div>
      </div>
      <div className="buy-finance-rent-container">
            <div className="buy-finance-rent-cards">
                <Card
                    color="light"
                    style={{
                    width: '26rem',
                    height: '30rem'
                    }}>
                  <img
                  alt="Sample"
                  src={buyhome}/>
              <CardBody>
                <CardTitle tag="h5">
                  Buy a home
                </CardTitle>
                <CardText>
                  Zillow makes it easy to browse homes. When you're ready, you can also connect with a local agent, explore financing solutions, schedule home tours, and more.
                </CardText>
                <Button>
                  Search homes
                </Button>
              </CardBody>
              </Card>
              <Card
                    color="light"
                    style={{
                    width: '26rem',
                    height: '30rem'
                    }}>
                  <img
                  alt="Sample"
                  src={financehome}/>
              <CardBody>
                <CardTitle tag="h5">
                  Finance a home
                </CardTitle>
                <CardText>
                  Zillow makes it easy to take steps to find the right loan, so you can get the home you want.
                </CardText>
                <Button>
                  Start now
                </Button>
              </CardBody>
              </Card>
              <Card
                    color="light"
                    style={{
                    width: '26rem',
                    height: '30rem'
                    }}>
                  <img
                  alt="Sample"
                  src={renthome}/>
              <CardBody>
                <CardTitle tag="h5">
                  Rent a home
                </CardTitle>
                <CardText>
                  We're creating a seamless online experience - from shopping on the largest rental network, to applying, to paying rent.
                </CardText>
                <Button>
                  Find rentals
                </Button>
              </CardBody>
              </Card>
            </div>
      </div>
      <div className="bottom-tabs-container">
          <h3>You have a right to fair housing.</h3>
          <a href="https://dos.ny.gov/system/files/documents/2021/08/fairhousingnotice.pdf" target="blank">Learn about New York Housing Protections</a>
          <div className="bottom-tabs-nav">
            <Nav
                  justified
                >
                  <NavItem>
                    <NavLink
                      active
                      href="#"
                    >
                      Real Estate
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      Rentals
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      active
                      href="#"
                    >
                      Mortage Rates
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      active
                      href="#"
                    >
                      Browse Homes
                    </NavLink>
                  </NavItem>
                </Nav>
          </div>
          <hr className="solid-bottom"></hr>
      </div>
      <nav className="misc-link-container">
        <ul className="misc-link-flex">
          <li>About</li>
          <li>Zestimates</li>
          <li>Research</li>
          <li>Careers</li>
          <li>Help</li>
          <li>Advertise</li>
          <li>Fair Housing Guide</li>
          <li>Terms of use</li>
          <li>Privacy Portal</li>
          <li>Cookie Preference</li>
          <li>Blog</li>
          <li>AI</li>
          <li>Mobile Apps</li>
          <li>Trulia</li>
          <li>StreetEasy</li>
          <li>HotPads</li>
          <li>Out East</li>
          <li>ShowingTime</li>
        </ul>
        <a href="https://privacy.zillowgroup.com/cookie" target="blank">Do Not Sell My Personal Information</a>
        <hr className="solid-bottom-misc"></hr>
      </nav>
      <div className="misc-details-container">
        <h3>This clone of Zillow's website was made by Nicholas Meade, a Full Stack Software Engineer.</h3>
        <h4>You can view Zillow's official website <a href="https://www.zillow.com/" target="blank">here</a>.</h4>
      </div>
      <div className="footer-logo">
          <img src={footerlogo} alt="Footer Logo" />
      </div>
    </div>
  );
}

export default App;
