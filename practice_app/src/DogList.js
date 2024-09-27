import React from "react";
import Form from "./Form";
import { useState } from "react";
import NextDogButton from "./ShowDog";
import DogTable from "./DogTable";
import axios from "axios";
import { Link } from "react-router-dom";

function DogList({ dogs, setDogs }) {
  const addDog = (newDog) => {
    axios.post('https://localhost:7084/Dog/create', newDog, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
        console.log("Dog added:", response.data);
        setDogs(prevDogs => [...prevDogs, response.data]);  
      return response;
    })
    .catch(error => {
      console.error("Error adding dog:", error.response ? error.response.data : error.message);
      throw error;
    });
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/dogs">List</Link></li>
          <li><Link to="/">View Dogs</Link></li>
        </ul>
      </nav>
      <Form addDog={addDog} />
      <NextDogButton dogs={dogs} setDogs={setDogs} />
      <DogTable dogs={dogs} setDogs={setDogs} />
    </div>
  );
}

export default DogList;