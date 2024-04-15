export default function ProyectDisplayer({proy}){

    return(
        <div className="bg-stone-700 w-full text-center p-8 rounded">
            <p className="font-semibold text-green-400  ">Titulo: {proy.item.name}</p>
            <p className="font-semibold text-green-400 " >Description: {proy.item.description}</p>
            <p className="font-semibold text-green-400 ">Date: {proy.item.date}</p>
        </div>
    )
}