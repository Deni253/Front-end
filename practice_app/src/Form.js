import { useState } from "react";
import './Form.css';

const Form = ({ addDog }) => {
  const [newDog, setNewDog] = useState({
    name: "",
    breed: "",
    age: "",
    imgSource: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDog({ ...newDog, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dogToSubmit = {
      ...newDog,
      Image: newDog.imgSource  
    };

    delete dogToSubmit.imgSource;  
    addDog(dogToSubmit); 
    alert("New dog added");
  };

  
  return (
    <div className="form">
      <h3>Add a New Dog</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={newDog.name} 
            onChange={handleInputChange} 
            required 
          />
        </label><br />
        <label>
          Breed:
          <input 
            type="text" 
            name="breed" 
            value={newDog.breed} 
            onChange={handleInputChange} 
            required 
          />
        </label><br />
        <label>
          Age:
          <input 
            type="number" 
            name="age" 
            value={newDog.age} 
            onChange={handleInputChange} 
            min="1" 
            required 
          />
        </label><br />
        <label>
          Image URL:
          <input 
            type="text" 
            name="imgSource" 
            value={newDog.imgSource} 
            onChange={handleInputChange} 
            required 
          />
        </label><br />
        <button type="submit" className="add-btn">Add Dog</button>
      </form>
    </div>
  );
};

export default Form;