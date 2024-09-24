import { useState } from "react";
import Dog from "./Dog";
import './ShowDog.css';
import UpdateDogForm from "./UpdateDogForm";



function NextDogButton({dogs,setDogs}) {

  const [Index,setIndex]=useState(0);
  const [displayUpdateForm,setdisplayUpdateForm]=useState(false); 

  function changeDog() {
    setIndex((prevIndex) => (prevIndex + 1) % dogs.length);
  }

  function deleteDog() {
    if (dogs.length === 0) return "No dogs lefts"; 
    
    const newDogs = [...dogs]; 
    newDogs.splice(Index, 1); 

    setDogs(newDogs); 
  }

  function updateDog(updatedDog) {
    const newDogs = [...dogs];
    newDogs[Index] = updatedDog; 
    setDogs(newDogs);
  }

  const toggleFormVisibility = () => {
    setdisplayUpdateForm(!displayUpdateForm); // Toggle
  };

  const currentDog = dogs[Index];

  return (
    <div className="dog-container">
     {<img src={currentDog.imgSource} className="dog-image" />}
      <Dog 
        name={currentDog.name} 
        breed={currentDog.breed} 
        age={currentDog.age}
      />
      <div id="tipke">
      <button id="next-dog-btn" onClick={changeDog}>Next Dog</button>
      <button id="delete-dog-btn" onClick={deleteDog}>Delete Dog</button>
      <button id="update-dog-btn" onClick={toggleFormVisibility}>Update Dog</button>
      {displayUpdateForm && (<UpdateDogForm currentDog={currentDog} updateDog={updateDog} toggleFormVisibility={toggleFormVisibility}/>)} {/*false i true trik */}
      </div>
    </div>
  );
}

export default NextDogButton;