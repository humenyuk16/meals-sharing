import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MealsList from "./components/MealsList";
import MealDetail from "./components/MealDetail";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer/Footer";
import AllReview from "./components/Review/AllReview";
import About from "./components/About/About";
import NotFound from "./components/Page404/Page404";

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
