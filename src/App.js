import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
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
