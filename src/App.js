import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import logo from "./Assets/logo.png";
import searchicon from "./Assets/searchicon.png";
import buyhome from "./Assets/buyhome.webp";
import financehome from "./Assets/financehome.webp";
import renthome from "./Assets/renthome.webp";
import footerlogo from "./Assets/footer-logo.svg";
import Buy from "./Components/Buy";
import Home from "./Components/Home";
import About from "./Components/About";
import Rent from "./Components/Rent";

function App() {
  return (
    <div className="App">
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homes" element={<Buy />} />
          <Route path="/about" element={<About />} />
          <Route path="/homes/for_rent" element={<Rent />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
