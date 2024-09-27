import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Dog from './Dog';
import axios from 'axios';

const HomePage = () => {
  const [dogs, setDogs] = useState([
  { id:"", name: "", breed: "", age: 0, image: "" } 
  ]);

  const [index, setIndex] = useState(0);

  
  useEffect(() => {
    const getDogs = () => {
      axios.get('https://localhost:7084/Dog/getall')
        .then(response => {
          console.log(response.data);
          setDogs(response.data);  
        })
        .catch(error => {
          console.log("Error fetching dogs:", error);
        });
    };

    getDogs();  
  }, []);

  const changeDog = () => {
    setIndex((prevIndex) => (prevIndex + 1) % dogs.length);
  };

  const currentDog = dogs[index];

  return (
    <div>
      <h1>Dogs</h1>
      <nav>
        <ul>
          <li><Link to="/dogs">List</Link></li>
          <li><Link to="/">View Dogs</Link></li>
        </ul>
      </nav>
      <div className="dog-container">
        {currentDog && (
          <>       
            <img src={currentDog.image} className="dog-image"/>
            <Dog 
              name={currentDog.name} 
              breed={currentDog.breed} 
              age={currentDog.age} 
            />
            <div id="tipke">
              <button id="next-dog-btn" onClick={changeDog}>Next Dog</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;