import { useRef } from 'react';

export default function ProyectDisplayer({ proy, tasks, onDisplay, onDelete }) {
    console.log(tasks)
    function handleClick() {
        const task = taskRef.current.value;
        if (task.trim() !== "") {
            onDisplay(proy.item, task);
            taskRef.current.value = "";
        }
    }
    const taskRef = useRef();
    const buttonStyle = "font-semibold bg-stone-300 shadow-lg hover:bg-stone-400 m-1 p-3 h-12 rounded border-solid border-2 border-black";
    return (
        <>
            <div className="bg-stone-500 flex flex-col p-5 h-auto w-full text-center">
                <div className="text-center">
                    <h1 className="font-semibold text-4xl m-4 text-green-400">Titulo: {proy.item.name}</h1>
                    <p className="font-semibold text-xl text-green-400 " >Description: {proy.item.description}</p>
                    <p className="font-semibold text-green-400 ">Date: {proy.item.date}</p>
                </div>
                <div>
                    <button className={buttonStyle}>Delete Proyect</button>
                </div>
            </div>
            <div className="bg-stone-300">
                <h2 className="font-bold text-3xl text-green-600 p-4 ">Tasks</h2>
                <input ref={taskRef} className="m-4 bg-stone-400" />
                <button onClick={handleClick} className="border-solid border-2 border-black p-1 m-2 rounded shadow-lg hover:bg-stone-400">+Add Task</button>
                {tasks.length >= 0 && tasks !== undefined && tasks !== null ?
                <div className="flex flex-col">
                    {tasks.map((task, index) => (
                        <div key={index}>
                            <p className="font-semibold text-green-600" >{task}</p>
                            <button onClick={()=>onDelete(index)} className={buttonStyle}>Delete task</button>
                        </div>
                    ))}
                </div> : ""}
            </div>
        </>
    )
}