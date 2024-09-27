import './DogTable.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DogTable({ dogs, setDogs }) {
  const navigate = useNavigate();

  const getDogs = () => {
    axios.get('https://localhost:7084/Dog/getall')
      .then(response => {
        console.log(response.data);
        setDogs(response.data); 
      })
  };

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
  };

  const goToUpdatePage = (dogId) => {
    navigate(`/update/${dogId}`);
  };

  useEffect(() => {
    getDogs();
  }, []);

  return (
    <div>
      {dogs.length === 0 ? (
        <p>No dogs available. Please add some!</p> 
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Breed</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dogs.map((dog,index) => ( 
              <tr key={dog.id || index}> 
                <td>{dog.name}</td>
                <td>{dog.breed}</td>
                <td>{dog.age}</td>
                <td>
                  <button id="del" onClick={() => deleteDog(dog.id)}>Delete</button>
                  <button id="updt" onClick={() => goToUpdatePage(dog.id)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DogTable;