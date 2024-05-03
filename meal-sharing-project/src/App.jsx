import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MealsList from "./components/MealsList";
import MealDetail from "./components/MealDetail";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import AllReview from "./components/Review/AllReview";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meals" element={<MealsList />} />
          <Route path="/meals/:id" element={<MealDetail />} />
          <Route path="/reviews" element={<AllReview />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
