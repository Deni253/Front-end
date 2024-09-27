import React, { useState } from 'react';
import DogList from './DogList';


const DogTablePage = () => {
  const [dogs, setDogs] = useState([
    { id: "", name: "", breed: "", age: 0, imgSource: "" }
  ]);

  return (
    <div>
      <h1>Dog List</h1>
      <DogList dogs={dogs} setDogs={setDogs} />
    </div>
  );
};

export default DogTablePage;