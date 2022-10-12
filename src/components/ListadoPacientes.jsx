import usePacientes from "../hooks/usePacientes";
import Paciente from "./Paciente";

const ListadoPacientes = () => {

  const {pacientes} = usePacientes()

    return (
      <>
        {pacientes.length ? (
          <>
            <h2 className="font-black text-3xl text-center">List of patients</h2>
            <p className="text-xl mt-2 mb-5 text-center">Manage your <span className="text-indigo-600 font-bold">patients</span></p>
            {pacientes.map( paciente => (
              <Paciente
                key= {paciente._id}
                paciente={paciente}
              />
            ))}
          </>

        ) : 
        (

          <>
            <h2 className="font-black text-3xl text-center">There are no patients</h2>
            <p className="text-xl mt-2 mb-5 text-center">Start adding and <span className="text-indigo-600 font-bold">will be displayed here</span></p>
          </>

        )}
      </>
    )
  }
  
  export default ListadoPacientes;