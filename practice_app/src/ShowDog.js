import { useState } from "react";
import Dog from "./Dog";
import './ShowDog.css';
import UpdateDogForm from "./UpdateDogForm";
import axios from "axios";
import { Link } from "react-router-dom";

function NextDogButton({ dogs, setDogs }) {
  const [Index, setIndex] = useState(0);
  const [displayUpdateForm, setdisplayUpdateForm] = useState(false);

  function changeDog() {
    setIndex((prevIndex) => (prevIndex + 1) % dogs.length);
  }

  const deleteDog = (dogId) => {
    axios.delete(`https://localhost:7084/Dog/del/${dogId}`)
      .then(response => {
        console.log(response.data);
        setDogs(prevDogs => prevDogs.filter(dog => dog.id !== dogId));
      })
      .catch(error => {
        console.error("There was an error deleting the dog:", error);
        alert("Error deleting dog: " + error.message);
      });
  }

  const toggleFormVisibility = () => {
    setdisplayUpdateForm(!displayUpdateForm); // Toggle
  };

  const currentDog = dogs[Index];
}

export default NextDogButton;