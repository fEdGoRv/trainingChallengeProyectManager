import { useState } from "react";
import FormProyect from "./components/FormProyect";
import ProyectDisplayer from "./components/ProyectDisplayer";


function App() {

  const [displayProyect, setDisplayProyect] = useState({
    form: false,
    proyect: false,
    currentProyect: 0,
    data: [{
      name: '',
      description: '',
      date: '',
      tasks:[]
    }],
    
  });
  const addButtonStyles = "shadow-lg rounded hover:bg-gray-300 border-solid border-2 border-black font-bold p-2 m-8 "

  function handleData(data) {
    setDisplayProyect(prevState => ({
      ...prevState,
      form: false,
      data: [...prevState.data, data]
    }));
  }

  function handleDisplayTasks(i, task){
     setDisplayProyect(prevState =>{
      let newData = [...prevState.data];
      if (!Array.isArray(newData[i].tasks)) {
        newData[i].tasks = [];
      }
      const updatedTasks = [...newData[i].tasks, task]
      console.log("dataFirstCopy:",newData)
      newData =[...newData, newData[i].tasks=updatedTasks]
      console.log("data:",newData)
      return {...prevState, data:newData}  
  });
}

  function handleForm() {
    setDisplayProyect(prevState => ({
      ...prevState,
      form: true,
      proyect: false
    }));
  }

  function handleDisplayProyect(index) {
    setDisplayProyect(prevState => ({
      ...prevState,
      form: false,
      proyect: true,
      currentProyect: index
    }))
  }

  function handleDeleteTask(indexp ,indexi){
    setDisplayProyect(prevState => {
      const updatedTasks = [...prevState.data[indexp].tasks];
      updatedTasks.splice(indexi, 1); 
      return { ...prevState, tasks: updatedTasks };
    });
  }

  function handleDeleteProyect(index){
      setDisplayProyect(prevState=>{
        const newData= [...prevState.data]
        displayProyect.proyect= false;
        newData.splice(index,1);
        return {...prevState, data:newData}
      })
  }

  return (
    <>
      <div className="flex m-8 rounded border-solid border-spacing-8 border-blue-300 ">
        <div className="flex flex-col items-center rounded-md  bg-orange-300">
          <h1 className="font-bold text-4xl p-8">Your Proyects</h1>
          <button className={addButtonStyles} onClick={handleForm}>Add Proyect</button>
          {displayProyect && displayProyect.data !== '' ? displayProyect.data.map((item,index) =>
            <button className={addButtonStyles} key={index} onClick={() => handleDisplayProyect(index)} >{item.name}</button>
          ): ''}
        </div>
        <div className="items-center">
          {displayProyect.form && <FormProyect handleData={handleData} />}
          {displayProyect.proyect && <ProyectDisplayer currentProject={displayProyect.currentProyect} onAddTask={handleDisplayTasks} onDeleteProyect={handleDeleteProyect} onDelete={handleDeleteTask} proy={displayProyect.data} />}
        </div>
      </div>
    </>
  );
}

export default App;
