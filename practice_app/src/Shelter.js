import './App.css';
const Shelter = ({ array }) => {
    return (
      <div>
        {array.map((dog, index) => (
          <div key={index}>
            <img src={dog.source} alt={dog.name} />
            <h2>{dog.name}</h2>
            <p>Breed: {dog.breed}</p>
            <p>Age: {dog.age}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  };
  
  export default Shelter;