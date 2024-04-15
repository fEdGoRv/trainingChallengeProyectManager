import { useState } from "react";
import FormProyect from "./components/FormProyect";
import ProyectDisplayer from "./components/ProyectDisplayer";


function App() {

  const [displayProyect, setDisplayProyect] = useState({
    form: false,
    proyect: false,
    data:{
      name:'',
      description:'',
      date:''
    }
  });
  const [proyectToDo, setProyectToDo] = useState([]);
  const addButtonStyles = "shadow-lg rounded hover:bg-gray-300 border-solid border-2 border-black font-bold p-2 m-8 "

  function handleData(data) {
    setProyectToDo(prevProyectToDo => [...prevProyectToDo, data]);
    setDisplayProyect(prevState => ({
     ...prevState, 
      form: false
  }));
  }

  function handleForm() {
    setDisplayProyect(prevState => ({
      ...prevState,
      form:true,
      proyect: false
    }));
    ;
  }

  function handleDisplayProyect(item) {
    setDisplayProyect(prevState =>({
      ...prevState,
      form: false,
      proyect: true,
      data:{item}
    }))
  }

  return (
    <>
      <div className="flex m-8 rounded border-solid border-spacing-8 border-blue-300 ">
        <div className="flex flex-col items-center rounded-md  bg-orange-300">
          <button className={addButtonStyles} onClick={handleForm}>Add Proyect</button>
          {proyectToDo.map((item) =>
            <button className={addButtonStyles} onClick={() => handleDisplayProyect(item)} key={item.name}>{item.name}</button>
          )}
        </div>
        <div className="items-center">
          {displayProyect.form && <FormProyect handleData={handleData} />}
          {displayProyect.proyect && <ProyectDisplayer proy={displayProyect.data} />}
        </div>
      </div>
    </>
  );
}

export default App;
