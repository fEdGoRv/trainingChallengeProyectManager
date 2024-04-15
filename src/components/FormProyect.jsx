import { useRef } from "react";

export default function Formproyect({handleData}){

    const nameRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();
    const buttonStyle = "font-semibold bg-orange-400 shadow-lg hover:bg-orange-200 m-6 p-4 rounded";
    
    function handleInfo(){
        const data ={
            name:nameRef.current.value,
            description:descriptionRef.current.value,
            date:dateRef.current.value
        }
        
        handleData(data);
    }
    
    return(
        <form className="text-center w-full h-xl rounded bg-gray-200">
            <div className="w-max-md flex flex-col p-5 h-20">
                <label className="font-semibold">Name</label>
                <input className="p-2" type='text' ref={nameRef} />
            </div>
            <div className="w-max-md flex flex-col p-5 h-auto">
                <label className="font-semibold">Description</label>
                <textarea className="p-2" ref={descriptionRef}/>
            </div>
            <div className="w-max-md flex flex-col p-5 h-20">
                <label className="font-semibold">Date</label>
                <input type='date' ref={dateRef} className="p-2"/>
            </div>
            <button className={buttonStyle} onClick={()=>handleInfo(nameRef, descriptionRef,dateRef)}>Save</button>
        </form>
    )
}