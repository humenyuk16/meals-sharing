import React, { useState } from "react";
import Modal from "../Modal";
import AddMealForm from "./AddMeal";
import "./About.css";

const About = () => {
  const [showForm, setShowForm] = useState(false);

  const handleJoinNowClick = () => {
    setShowForm(true);
  };

  const handleCloseModal = () => {
    setShowForm(false);
  };

  return (
    <div className="About-container">
      <h1 className="about-title">
        Let's Share Meals, Stories, and Moments Together
      </h1>

      <div className="first-paragraph">
        <p className="about-paragraph">
          We believe in the joy of sharing meals with loved ones. Whether it's
          gathering your closest friends for a dinner party or enjoying a cozy
          family meal, food has a unique way of bringing people together.
        </p>
        <img
          src="mealsharing1.jpg"
          alt="meal-sharing"
          className="image-about"
        />
      </div>
      <div className="second-paragraph">
        <img
          src="mealsharing2.jpg"
          alt="meal-sharing"
          className="image-about"
        />
        <p className="about-paragraph">
          At <i>Meal-sharing</i>, our mission is to foster meaningful
          connections and strengthen relationships through the shared experience
          of food. We believe that every meal is an opportunity for connection,
          laughter, and celebration—and we're here to make those moments even
          more memorable. Join us in embracing the joy of sharing meals
          together. Whether you're a seasoned home cook or a dining enthusiast,
          there's a place for you at <i>Meal-sharing</i>.
        </p>
      </div>

      <div className="share-experience">
        <h2>Share Your Meal Experience</h2>
        <p>
          Join our community and share your favorite meal stories, recipes, and
          culinary adventures with friends and family.
        </p>
        <button onClick={handleJoinNowClick}>Join Now</button>
      </div>

      {showForm && (
        <Modal onClose={handleCloseModal}>
          <AddMealForm onSuccess={handleCloseModal} />
        </Modal>
      )}
    </div>
  );
};

export default About;
