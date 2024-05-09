import { useState } from "react";
import Modal from "../Modal";

const AddMealForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    when_date: "",
    max_reservations: "",
    image_url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Generate current date and format it as yyyy-mm-dd HH:MM:SS
      const currentDate = new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");
      setFormData({ ...formData, created_date: currentDate });

      const response = await fetch(
        "https://meals-sharing.onrender.com/api/meals",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        console.log("Meal added successfully!");
        window.alert("Meal added successfully!");
        onSuccess();
      } else {
        throw new Error("Failed to add meal");
      }
    } catch (error) {
      console.error("Error adding meal:", error.message);
    }
  };

  return (
    <Modal onClose={onSuccess}>
      <h1>It's time to share</h1>
      <form onSubmit={handleSubmit} className="add-meal-form">
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={formData.title}
          onChange={handleChange}
        />

        <textarea
          placeholder="Enter description"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          placeholder="Enter location"
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />

        <input
          placeholder="Enter price"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />

        <input
          placeholder="Enter date"
          type="date"
          name="when_date"
          value={formData.when_date}
          onChange={handleChange}
        />

        <input
          placeholder="Enter max reservations"
          type="number"
          name="max_reservations"
          value={formData.max_reservations}
          onChange={handleChange}
        />

        <input
          placeholder="Add image url"
          type="text"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
        />

        <div className="add-meal-buttons-container">
          <button type="submit" className="add-meal-button-submit">
            Submit
          </button>
          <button
            type="button"
            onClick={onSuccess}
            className="add-meal-button-cancel"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddMealForm;
