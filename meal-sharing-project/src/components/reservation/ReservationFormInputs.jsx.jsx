import { useState } from "react";

const ReservationFormInputs = ({ mealId, onSubmit }) => {
  const [formData, setFormData] = useState({
    meal_id: mealId,
    number_of_guests: "",
    contact_name: "",
    contact_phonenumber: "",
    contact_email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <input
        name="number_of_guests"
        type="number"
        placeholder="Enter number of guests"
        value={formData.number_of_guests}
        onChange={handleChange}
        min="1"
        inputMode="numeric"
        required
      />
      <input
        name="contact_name"
        type="text"
        placeholder="Enter name"
        value={formData.contact_name}
        onChange={handleChange}
        required
      />
      <input
        name="contact_phonenumber"
        type="text"
        placeholder="Enter phone number"
        value={formData.contact_phonenumber}
        onChange={handleChange}
        required
      />
      <input
        name="contact_email"
        type="email"
        placeholder="Enter email"
        value={formData.contact_email}
        onChange={handleChange}
        required
      />
      <button type="submit" className="reservation-button">
        Reserve
      </button>
    </form>
  );
};

export default ReservationFormInputs;
