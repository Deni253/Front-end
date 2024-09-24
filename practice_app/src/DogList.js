import NextDogButton from "./ShowDog";
import Form from "./Form";
import { useState } from "react";
import UpdateDogForm from "./UpdateDogForm";
import DogTable from "./DogTable";

function DogList(){
    const [dogs, setDogs] = useState([
    {name :"Rex",
      breed:"German-Sheperd",
      age:4,
      imgSource:"https://www.akc.org/wp-content/uploads/2017/11/German-Shepherd-on-White-00.jpg"
    },
    {name :"Cupcake",
      breed:"Pitbull",
      age:4,
      imgSource:"https://media.istockphoto.com/id/513392620/photo/big-dog.jpg?s=612x612&w=0&k=20&c=YgiuJ9_3LGYwHB40IVMnjwv8p-4RCFLwcD-yJAOYAGE="
    },
    {name :"Ben",
      breed:"Golden-retriever",
      age:4,
      imgSource:"https://www.metrovetchicago.com/cdn-cgi/image/q=75,f=auto,metadata=none/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg?itok=63KE05VA"
    },
    {name :"Gustavo",
      breed:"Chihuahua",
      age:2,
      imgSource:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLn6-r7R1P3y2-62MEDQt3BfmOToU1gljdA&s"
    },
    {name :"Juan",
      breed:"Chihuahua",
      age:1,
      imgSource:"https://www.petassure.com/petassure/file-streams/page/aMcOlSYvFaQ0ZAZg00k5K3helpful-tips-training-your-chihuahua.jpg.jpg"
    },
    {name :"Willy",
      breed:"Weiner-dog",
      age:4,
      imgSource:"https://cdn.britannica.com/81/12481-050-6FF2A457/dachshund-coat-hair.jpg"
    },
  ]);

  const addDog = (newDog) => {
    setDogs([...dogs, newDog]);
  };


  return (
    <div className="App">
      <Form addDog={addDog}/>  
      <NextDogButton dogs={dogs} setDogs={setDogs}/> {/*passanje props drugoj komponenti*/}
      <DogTable dogs={dogs} />
    </div>
  );
}

export default DogList;
