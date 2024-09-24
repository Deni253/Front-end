import './DogTable.css';
function DogTable({dogs}){
    return(
        <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Breed</th>
            <th>Age</th>
            </tr>
        </thead>
        <tbody>
        {dogs.map((dog,index) =>( //Da ih prikažemo više
            <tr key={index}>
                <td>{dog.name}</td>
                <td>{dog.breed}</td>
                <td>{dog.age}</td>
            </tr>
        ))}
      </tbody>
        </table>
    );
}

export default DogTable;