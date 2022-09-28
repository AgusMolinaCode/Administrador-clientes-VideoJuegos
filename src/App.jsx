import {useState, useEffect} from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoClientes from "./components/ListadoClientes"


function App() {

  const [clientes,setClientes] = useState(JSON.parse(localStorage.getItem('clientes')) ?? []);
  const [cliente,setCliente] = useState({})


  useEffect(() => {
   localStorage.setItem('clientes', JSON.stringify( clientes ))
  }, [clientes])
  

  const eliminarCliente = (id) => {
    const clientesActualizados = clientes.filter( cliente => cliente.id !== id)
    setClientes(clientesActualizados)
  }

  

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex ">
        <Formulario 
          clientes = {clientes}
          setClientes = {setClientes}
          cliente={cliente}
          setCliente={setCliente}
        />
        <ListadoClientes 
          clientes={clientes}
          setCliente={setCliente}
          eliminarCliente={eliminarCliente}
        />
      </div>
    </div>
  )
}

export default App
