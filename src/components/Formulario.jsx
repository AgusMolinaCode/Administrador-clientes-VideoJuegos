import {useState, useEffect} from 'react'
import Error from './Error';

const Formulario = ({clientes,setClientes, cliente, setCliente}) => {
  
  const [nombre,setNombre] = useState('');
  const [juego,setJuego] = useState('');
  const [email,setEmail] = useState('');
  const [fecha,setFecha] = useState('');
  const [notas,setNotas] = useState('');

  const [error,setError] = useState(false)

  useEffect(() => {
    if (Object.keys(cliente).length > 0) {
        setNombre(cliente.nombre)
        setJuego(cliente.juego)
        setEmail(cliente.email)
        setFecha(cliente.fecha)
        setNotas(cliente.notas)
    } 
  }, [cliente])
  

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha
  }



  const handleSubmit = (e) => {
    e.preventDefault();

    if([nombre,juego,email,fecha,notas].includes('')) {
      setError(true)
      return
    } 

    setError(false)

    const objetoCliente = {
      nombre,juego,email,fecha,notas
    }

    if (cliente.id ) {
      objetoCliente.id = cliente.id
      const clientesActualizados = clientes.map( clienteState => clienteState.id === cliente.id ? objetoCliente : clienteState)
      setClientes(clientesActualizados)
      setCliente({})
    } else {
      objetoCliente.id = generarId()
      setClientes([...clientes,objetoCliente])
    }


    setNombre('')
    setJuego('')
    setEmail('')
    setFecha('')
    setNotas('')

  }

  
  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Administra tus Clientes</h2>

      <p className='text-xl mt-5 text-center mb-10'>
        Ingresa tus <span className='text-red-600 font-bold'>Clientes</span>
      </p>

      <form className='bg-white shadow-xl rounded-xl py-10 px-5' onSubmit={handleSubmit}>
          
          {error && <Error><p>Todos los campos son obligatorios</p></Error>}

          <div className='mb-5'>
            <label htmlFor="cliente" className='block text-gray-700 uppercase font-bold'>Nombre Cliente: </label>
            <input type="text" id='cliente' placeholder='Nombre de Cliente' className='border-2 w-full p-2 mt-2 placeholder-red-300 rounded-xl' value={nombre} onChange={(e) => setNombre(e.target.value) }/>
          </div>

          <div className='mb-5'>
            <label htmlFor="juego" className='block text-gray-700 uppercase font-bold'>Juego: </label>
            <input type="text" id='juego' placeholder='Juego Comprado' className='placeholder-red-300 border-2 w-full p-2 mt-2 rounded-xl' value={juego} onChange={(e) => setJuego(e.target.value) }/>
          </div>

          <div className='mb-5'>
            <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email: </label>
            <input type="email" id='email' placeholder='Email de Cliente' className='border-2 w-full p-2 mt-2 placeholder-red-300 rounded-xl' value={email} onChange={(e) => setEmail(e.target.value) }/>
          </div>

          <div className='mb-5'>
            <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>Vencimiento Suscripcion: </label>
            <input type="date" id='alta' className='border-2 w-full p-2 mt-2 rounded-xl' value={fecha} onChange={(e) => setFecha(e.target.value) }/>
          </div>

          <div className='mb-5'>
            <label htmlFor="notas" className='block text-gray-700 uppercase font-bold'>Notas: </label>
            <textarea name="" placeholder='Notas' id="notas" className='border-2 w-full p-2 mt-2 placeholder-red-300 placeholder-  rounded-xl' value={notas} onChange={(e) => setNotas(e.target.value) }/>
          </div>

          <input type="submit" className=' uppercase bg-red-500 w-full rounded-2xl p-3 text-white font-bold cursor-pointer hover:bg-red-600 transition-all' value={ cliente.id ? 'Editar Cliente' : 'Agregar Cliente'} />

      </form>


    </div>
  )
}

export default Formulario