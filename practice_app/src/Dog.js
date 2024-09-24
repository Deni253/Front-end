import './App.css';


const Dog = ({ name, breed, age,imgSource }) => {
    return (
      <div>
        <img src={imgSource}></img>
        <h2>{name}</h2>
        <p>Breed: {breed}</p>
        <p>Age: {age}</p>
      </div>
    );
  };

export default Dog;