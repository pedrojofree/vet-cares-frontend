import { useState, useEffect } from "react";
import Alerta from "./Alerta";
import usePacientes from "../hooks/usePacientes";

const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas] = useState("");
    const [id, setId] = useState(null)

    const [alerta, setAlerta] = useState({});

    const {guardarPaciente, paciente} = usePacientes();

    useEffect(() => {
        if(paciente?.nombre){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
            setId(paciente._id)
        }
    }, [paciente])

    const handleSubmit = e => {
        e.preventDefault()
        //validar Formulario
        if([nombre, propietario, email, fecha, sintomas].includes("")){
            setAlerta({msg:"There are missing fields", error: true})
            return
        }
        
        guardarPaciente({nombre, propietario, email, fecha, sintomas, id})
        setAlerta({msg: "Patient saved"})
        
        setNombre("")
        setPropietario("")
        setEmail("")
        setFecha("")
        setSintomas("")
        setId("")
    }
    const {msg} = alerta;
  return (
    <>
        <h2 className="font-black text-3xl text-center">Patient Manangment</h2>
        <p className="text-xl mt-2 mb-5 text-center">Add your <span className="text-indigo-600 font-bold">patients</span></p>

        <form 
            className="bg-white py-5 px-5 mb-10 lg:mb-0 shadow-md rounded-xl"
            onSubmit={handleSubmit}
            >
            {msg && <Alerta alerta={alerta}/>}
            
            {/* PET NAME */}
            <div className="mb-5">
                <label 
                    htmlFor="nombre" 
                    className="text-gray-700 uppercase font-bold">Name</label>
                <input
                    type="text"
                    id="nombre"
                    placeholder="Pet's name"
                    className="border-2 w-full p-3 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>

            {/* PROPIETARIO */}
            <div className="mb-5">
                <label 
                    htmlFor="propietario" 
                    className="text-gray-700 uppercase font-bold">Propietario</label>
                <input
                    type="text"
                    id="propietario"
                    placeholder="Full name"
                    className="border-2 w-full p-3 mt-2 placeholder-gray-400 rounded-md"
                    value={propietario}
                    onChange={e => setPropietario(e.target.value)}
                />
            </div>
            {/* EMAIL */}
            <div className="mb-5">
                <label 
                    htmlFor="email" 
                    className="text-gray-700 uppercase font-bold">Email address</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="border-2 w-full p-3 mt-2 placeholder-gray-400 rounded-md"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            {/* FECHA */}
            <div className="mb-5">
                <label 
                    htmlFor="fecha" 
                    className="text-gray-700 uppercase font-bold">Reciviment day</label>
                <input
                    type="date"
                    id="fecha"
                    className="border-2 w-full p-3 mt-2 placeholder-gray-400 rounded-md"
                    value={fecha}
                    onChange={e => setFecha(e.target.value)}
                />
            </div>
            {/* SINTOMAS */}
            <div className="mb-5">
                <label 
                    htmlFor="sintomas" 
                    className="text-gray-700 uppercase font-bold">Symptoms</label>
                <textarea
                    id="sintomas"
                    placeholder="Describe the symptoms"
                    className="border-2 w-full p-3 mt-2 placeholder-gray-400 rounded-md"
                    value={sintomas}
                    onChange={e => setSintomas(e.target.value)}
                />
            </div>
            <input 
                type="submit" 
                value={id ? "Save changes" : "Add patient"}
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors rounded-md"
            />
        </form>
        

    </>
  )
}

export default Formulario