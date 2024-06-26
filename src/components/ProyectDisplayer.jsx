import { useRef } from 'react';

export default function ProyectDisplayer({ proy, currentProject, onAddTask, onDelete, onDeleteProyect }) {
    
    function handleClick() {
        const task = taskRef.current.value;
        if (task.trim() !== "") {
            onAddTask(currentProject, task);
            taskRef.current.value = "";
        }
    }

    const selectedProject = proy[currentProject];
    const taskRef = useRef();
    const buttonStyle = "font-semibold bg-stone-300 shadow-lg hover:bg-stone-400 m-1 p-3 h-12 rounded border-solid border-2 border-black";
    return (
        <>
            <div className="bg-stone-500 flex flex-col p-5 h-auto w-full text-center">
                <div className="text-center">
                    <h1 className="font-semibold text-4xl m-4 text-green-400">Titulo: {selectedProject.name}</h1>
                    <p className="font-semibold text-xl text-green-400 " >Description: {selectedProject.description}</p>
                    <p className="font-semibold text-green-400 ">Date: {selectedProject.date}</p>
                </div>
                <div>
                    <button onClick={()=>onDeleteProyect(currentProject)} className={buttonStyle}>Delete Proyect</button>
                </div>
            </div>
            <div className="bg-stone-300">
                <h2 className="font-bold text-3xl text-green-600 p-4 ">Tasks</h2>
                <input ref={taskRef} className="m-4 bg-stone-400" />
                <button onClick={handleClick} className="border-solid border-2 border-black p-1 m-2 rounded shadow-lg hover:bg-stone-400">+Add Task</button>
                {selectedProject.tasks && selectedProject.tasks.length >= 0 ?
                <div className="flex flex-col">
                    {selectedProject.tasks.map((task, index) => (
                        <div key={index}>
                            <p className="font-semibold text-green-600" >{task}</p>
                            <button onClick={()=>onDelete(currentProject, index)} className={buttonStyle}>Delete task</button>
                        </div>
                    ))}
                </div> : ""}
            </div>
        </>
    )
}