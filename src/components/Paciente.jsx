import usePacientes from "../hooks/usePacientes";

const Paciente = ({paciente}) => {
  
  const { setEdicion, eliminarPaciente } = usePacientes()

  const { email, fecha, nombre, propietario, sintomas, _id} = paciente;

  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha)
    return new Intl.DateTimeFormat("es-MX", {dateStyle:"long"}).format((nuevaFecha))
  }

  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-5 rounded-xl">
      <p className="font-bold text-indigo-800 my-2 uppercase">Name: <span className="text-black font-normal normal-case">{nombre}</span></p>

      <p className="font-bold text-indigo-800 my-2 uppercase">Owner: <span className="text-black font-normal normal-case">{propietario}</span></p>

      <p className="font-bold text-indigo-800 my-2 uppercase">Contact Email: <span className="text-black font-normal normal-case">{email}</span></p>

      <p className="font-bold text-indigo-800 my-2 uppercase">Date: <span className="text-black font-normal normal-case">{formatearFecha(fecha)}</span></p>

      <p className="font-bold text-indigo-800 my-2 uppercase">Symptoms: <span className="text-black font-normal normal-case">{sintomas}</span></p>
      
      <div className="flex justify-between mt-10 my-5">
        <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg" onClick={() => setEdicion(paciente)}>Edit</button>
        <button type="button" className="py-2 px-10 bg-red-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg" onClick={() => eliminarPaciente(_id)}>Delete</button>
      </div>

    </div>
  )
}

export default Paciente;