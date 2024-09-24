import { useState } from "react";
import Dog from "./Dog";
import NextDogButton from "./ShowDog";
    function UpdateDogForm({ currentDog, updateDog ,toggleFormVisibility}) {
        const [updatedDog, setUpdatedDog] = useState({
          name: currentDog.name,
          breed: currentDog.breed,
          age: currentDog.age,
          imgSource: currentDog.imgSource,
        });

      
        const handleInputChange = (e) => {
          const {name , value} = e.target;
          setUpdatedDog({ ...updatedDog, [name]: value });      
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          updateDog(updatedDog);  
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
                />
              </label><br />
              <button type="submit" className="update-btn">Update</button>
              <button className="close-btn" onClick={toggleFormVisibility}>Close</button>
            </form>
          </div>
        );
       }

export default UpdateDogForm;