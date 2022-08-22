import { Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

const ListingSearch = () => {
    return ( 
        <div>
            <hr></hr>
            <ul className="listing-search-container">
                <li>
                    <Nav className="me-2" fill justified>
                        <NavItem>
                            <input type="text" />
                        </NavItem>
                        <NavItem>
                            <button>For Sale</button>
                        </NavItem>
                        <NavItem>
                            <button>Price</button>
                        </NavItem>
                        <NavItem>
                            <button>Beds & Baths</button>
                        </NavItem>
                        <NavItem>
                            <button>Home Type</button>
                        </NavItem>
                        <NavItem>
                            <button>More</button>
                        </NavItem>
                        <NavItem>
                            <button>Save Search</button>
                        </NavItem>
                    </Nav>
                </li>
            </ul>
            <hr></hr>
        </div>
     );
}

export default ListingSearch;