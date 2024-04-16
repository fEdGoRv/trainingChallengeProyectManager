import { useState } from "react";
import FormProyect from "./components/FormProyect";
import ProyectDisplayer from "./components/ProyectDisplayer";


function App() {

  const [displayProyect, setDisplayProyect] = useState({
    form: false,
    proyect: false,
    data: {
      name: '',
      description: '',
      date: ''
    },
    tasks:[]
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
      form: true,
      proyect: false
    }));
    ;
  }

  function handleDisplayProyect(item, task) {
    setDisplayProyect(prevState => ({
      ...prevState,
      form: false,
      proyect: true,
      data: { item },
      tasks:[...prevState.tasks, task]
    }))
  }

  function handleDeleteTask(index){
    setDisplayProyect(prevState => {
      const updatedTasks = [...prevState.tasks]; // Create a copy of the tasks array
      updatedTasks.splice(index, 1); // Remove the task at the specified index
      return { ...prevState, tasks: updatedTasks }; // Update the state with the new tasks array
    });
  }

  return (
    <>
      <div className="flex m-8 rounded border-solid border-spacing-8 border-blue-300 ">
        <div className="flex flex-col items-center rounded-md  bg-orange-300">
          <h1 className="font-bold text-4xl p-8">Your Proyects</h1>
          <button className={addButtonStyles} onClick={handleForm}>Add Proyect</button>
          {proyectToDo.map((item) =>
            <button className={addButtonStyles} onClick={() => handleDisplayProyect(item)} key={item.name}>{item.name}</button>
          )}
        </div>
        <div className="items-center">
          {displayProyect.form && <FormProyect handleData={handleData} />}
          {displayProyect.proyect && <ProyectDisplayer onDisplay={handleDisplayProyect} onDelete={handleDeleteTask} tasks={displayProyect.tasks} proy={displayProyect.data} />}
        </div>
      </div>
    </>
  );
}

export default App;
