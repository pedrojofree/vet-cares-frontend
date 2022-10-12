import AdminNav from "../components/AdminNav"
import useAuth from "../hooks/useAuth"
import { useEffect, useState } from "react";
import Alerta from "../components/Alerta"

const EditarPerfil = () => {

    const {auth, actualizarPerfil} = useAuth()
    const [perfil, setPerfil] = useState({})
    const [alerta, setAlerta] = useState({})

    useEffect(() => {
      setPerfil(auth)

    }, [auth])

    const handleSubmit = async e => {
        e.preventDefault()
        const {nombre, email} = perfil

        if([nombre, email].includes("")){
            setAlerta({msg: "Email and Password are mandatory", error: true})
            return
        }

        const resultado = await actualizarPerfil(perfil)
        setAlerta(resultado)
    }

    const {msg} = alerta

    return (
        <>
            <AdminNav/>

            <h2 className="font-black text-3xl text-center mt-10">Profile</h2>
            <p className="text-xl mt-5 mb-10 text-center">Modify your <span className="text-indigo-600 font-bold">Profile</span></p>

            <div className="flex justify-center">
                <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-5">

                    {msg && <Alerta alerta={alerta}/>}

                    <form onSubmit={handleSubmit}>
                        <div className="my-3">
                            <label htmlFor="name" className="uppercase font-bold text-gray-600">Name</label>
                            <input 
                                type="text" 
                                name="nombre" 
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                value={perfil.nombre || ""}
                                onChange={e => setPerfil({
                                    ...perfil, 
                                    [e.target.name] : e.target.value
                                })}
                            />
                        </div>
                        <div className="my-3">
                            <label htmlFor="website" className="uppercase font-bold text-gray-600">Website</label>
                            <input 
                                type="text" 
                                name="web" 
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                value={perfil.web || ""}
                                onChange={e => setPerfil({
                                    ...perfil, 
                                    [e.target.name] : e.target.value
                                })}
                            />
                        </div>
                        <div className="my-3">
                            <label htmlFor="phone" className="uppercase font-bold text-gray-600">Phone</label>
                            <input 
                                type="text" 
                                name="telefono" 
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                value={perfil.telefono || ""}
                                onChange={e => setPerfil({
                                    ...perfil, 
                                    [e.target.name] : e.target.value
                                })}
                            />
                        </div>
                        <div className="my-3">
                            <label htmlFor="email" className="uppercase font-bold text-gray-600">email</label>
                            <input 
                                type="text" 
                                name="email" 
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                value={perfil.email || ""}
                                onChange={e => setPerfil({
                                    ...perfil, 
                                    [e.target.name] : e.target.value
                                })}
                            />
                        </div>
                        <input type="submit" value="Save Changes" className="bg-indigo-700 px-10 py-4 font-bold text-white rounded-lg uppercase w-full mt-5 "/>
                    </form>
                </div>
            </div>
        </>
    )
};

export default EditarPerfil