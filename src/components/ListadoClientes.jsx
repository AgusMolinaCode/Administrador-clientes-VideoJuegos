
import Cliente from "./Cliente"

const ListadoClientes = ({clientes, setCliente, eliminarCliente}) => {
  

 return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

      {clientes && clientes.length ? (
        
      <>  
        
        <h2 className='font-black text-3xl text-center'>Listado Clientes</h2>
        <p className='text-xl mt-5 mb-10 text-center'>
          Administra tus <span className='text-red-600 font-bold'>Clientes</span>
        </p>
  
        { clientes.map( cliente => {
          return <Cliente 
            key={cliente.id}  
            cliente={cliente}
            setCliente={setCliente}
            eliminarCliente={eliminarCliente}

          />
        })}

      

      </>


      ) : (
        
      <>
        
        <h2 className='font-black text-3xl text-center mt-10'>No hay Clientes</h2>
        <p className='text-xl mt-5 mb-10 text-center'>
          Agrega tus <span className='text-red-600 font-bold'>Clientes</span>
        </p>

      </>
      )}

      

    </div>
  )
}

export default ListadoClientes