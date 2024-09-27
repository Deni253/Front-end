import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateDogForm() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [updatedDog, setUpdatedDog] = useState({
    name: '',
    breed: '',
    age: '',
    image: '', 
  });
  
  useEffect(() => {
    const fetchDog = () => {
      console.log("Fetching dog with ID:", id);
      axios.get(`https://localhost:7084/Dog/get/${id}`)
        .then(response => {
          if (response.data) {
            setUpdatedDog({
              name: response.data.name || '',
              breed: response.data.breed || '',
              age: response.data.age || '',
              image: response.data.image || '', 
            });
            console.log("Fetched dog data:", response.data);
          }
        })
        .catch(error => {
          console.error("Failed to fetch dog data:", error);
        });
    };
  
    fetchDog();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDog(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://localhost:7084/Dog/update/${id}`, { ...updatedDog, id: id })
      .then((response) => {
        console.log("Dog updated successfully:", response.data);
        navigate('/dogs'); 
      })
      .catch(error => {
        console.error("Failed to update dog data:", error.response ? error.response.data : error.message);
      });
  };

  return (
    <div className="form">
      <h3>Update Dog</h3>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={updatedDog.name} 
            onChange={handleInputChange} 
            required 
          />
        </label><br />
        
        <label>
          Breed:
          <input 
            type="text" 
            name="breed" 
            value={updatedDog.breed} 
            onChange={handleInputChange} 
            required 
          />
        </label><br />
        
        <label>
          Age:
          <input 
            type="number" 
            name="age" 
            value={updatedDog.age} 
            onChange={handleInputChange} 
            min="0" 
            required 
          />
        </label><br />
        
        <label>
          Image URL: 
          <input 
            type="text" 
            name="image" 
            value={updatedDog.image} 
            onChange={handleInputChange} 
          />
        </label><br />
        
        <button type="submit" className="update-btn">Update</button>
        <button type="button" className="close-btn" onClick={() => navigate('/dogs')}>Close</button>
      </form>
    </div>
  );
}

export default UpdateDogForm;