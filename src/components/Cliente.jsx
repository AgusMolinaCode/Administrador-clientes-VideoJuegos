import { useEffect } from "react"

const Cliente = ({cliente, setCliente, eliminarCliente}) => {
  
  const { nombre , juego ,  email, fecha, notas , id} = cliente

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este cliente?');

    if (respuesta) {
      eliminarCliente(id)
    }
  }

  return (
    <div className='mx-5 my-10 bg-white shadow-xl px-5 py-10 rounded-2xl '>
        
        <p className='font-bold mb-3 text-gray-600 uppercase'>Nombre: <span className='font-normal normal-case'>{nombre}</span></p>

        <p className='font-bold mb-3 text-gray-600 uppercase'>Juego: <span className='font-normal normal-case'>{juego}</span></p>

        <p className='font-bold mb-3 text-gray-600 uppercase'>Email: <span className='font-normal normal-case'>{email}</span></p> 

        <p className='font-bold mb-3 text-gray-600 uppercase'>Fecha Alta: <span className='font-normal normal-case'>{fecha}</span></p> 

        <p className='font-bold mb-3 text-gray-600 uppercase'>Notas: <span className='font-normal normal-case'>{notas}</span></p>

        <div className="flex justify-around mt-10">
          <button type="button" className="py-2 px-10 bg-indigo-500 hover:bg-indigo-600 text-white font-bold uppercase rounded-xl" onClick={() => setCliente(cliente)}>Editar</button>
          <button type="button" className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-xl" onClick={handleEliminar}>Eliminar</button>
        </div> 

    </div>
  )
}

export default Cliente