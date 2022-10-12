import AdminNav from "../components/AdminNav"
import Alerta from "../components/Alerta"
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const CambiarPass = () => {

    const {guardarPassword} = useAuth()

    const [alerta, setAlerta] = useState({})
    const [password, setPassword] = useState({ pwd_actual : "", pwd_nuevo: ""})

    const handleSubmit = async e => {
        e.preventDefault()
        

        if(Object.values(password).some( campo => campo === "")){
            setAlerta({msg: "There are missing fields", error: true})
            return
        }
        if (password.pwd_nuevo.length <= 6){
            setAlerta({msg: "New password must have more than 6 characters"})
            return
        }

        const respuesta = await guardarPassword(password)
        setAlerta(respuesta)
        
    }
    const {msg} = alerta
    return (
        <>
            <AdminNav/>

            <h2 className="font-black text-3xl text-center mt-10">Change Password</h2>
            <p className="text-xl mt-5 mb-10 text-center">Modify your <span className="text-indigo-600 font-bold">Password</span></p>
            <div className="flex justify-center">
                <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-5">

                    {msg && <Alerta alerta={alerta}/>}

                    <form onSubmit={handleSubmit}>

                        <div className="my-3">
                            <label htmlFor="passwordOld" className="uppercase font-bold text-gray-600">Actual Password</label>
                            <input 
                                type="password" 
                                name="pwd_actual" 
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                onChange={e => setPassword({
                                    ...password,
                                    [e.target.name] : e.target.value
                                })}
                            />
                        </div>
                        <div className="my-3">
                            <label htmlFor="passwordNew" className="uppercase font-bold text-gray-600">New Password</label>
                            <input 
                                type="password" 
                                name="pwd_nuevo" 
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                onChange={e => setPassword({
                                    ...password,
                                    [e.target.name] : e.target.value
                                })}
                            />
                        </div>
                       
                        <input type="submit" value="Change Password" className="bg-indigo-700 px-10 py-4 font-bold text-white rounded-lg uppercase w-full mt-5 "/>
                    </form>
                </div>
            </div>
        </>
    )
}
  
export default CambiarPass