import { Link } from "react-router-dom";
import { useState } from "react";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios"
const Register = () => {

    const[nombre, setNombre] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[repetirPassword, setRepetirPassword] = useState("");
    const [alerta, setAlerta] = useState("");

    const handleSubmit = async e => {
      e.preventDefault()
      if ([nombre, email, password, repetirPassword].includes("")){
        setAlerta({ msg: "There are missing fields", error: true})
        return
      }
      if (password !== repetirPassword){
        setAlerta({ msg: "Both passwords are diferent", error: true})
        return
      }
      if (password.length <= 6){
        setAlerta({ msg: "The password is too short. Use more than 6 characters", error: true})
        return
      }
      setAlerta({})

      //Crear usuario en la API.
      try {
        await clienteAxios.post(`/veterinarios`,{nombre, email, password});
        setAlerta({msg:"User created successfully! Check your email inbox", error: false})
      } catch (error) {
        setAlerta({msg: error.response.data.msg, error: true})
      }
    }

    const {msg} = alerta; //Si esta valiable tiene contenido se muestran las alertas.

    return (
      <>  

      <div>
        <h1 className="text-indigo-600 font-black text-6xl">Create your<span className="text-black"> account</span></h1>
        <h1 className="text-indigo-600 font-black text-2xl mt-5">And start administering your furry patients.</h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg p-10 rounded-lg bg-white">
        {msg && <Alerta
          alerta={alerta}
        />}
        <form onSubmit={handleSubmit}>

          {/* NOMBRE */}
          <div className="my-5">
            <label className="uppercase text-gray-600 block  text-xl font-bold">Name</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              className="w-full outline-none p-3 mt-3 bg-gray-50 rounded-xl" 
              value={nombre} 
              onChange={e=>setNombre(e.target.value)}
            />
          </div>

          {/* EMAIL */}
          <div className="my-5">
            <label className="uppercase text-gray-600 block  text-xl font-bold">Email</label>
            <input 
              type="email" 
              placeholder="example@example.com" 
              className="w-full outline-none p-3 mt-3 bg-gray-50 rounded-xl" 
              value={email} 
              onChange={e=>setEmail(e.target.value)}
            />
          </div>

          {/* PASSWORD */}
          <div className="my-5">
            <label className="uppercase text-gray-600 block  text-xl font-bold">Password</label>
            <input 
              type="password" 
              className="w-full outline-none p-3 mt-3 bg-gray-50 rounded-xl" 
              value={password} 
              onChange={e=>setPassword(e.target.value)}
            />
          </div>

          {/* PASSSWORD 2 */}
          <div className="my-5">
            <label className="uppercase text-gray-600 block  text-xl font-bold">Repeat Password</label>
            <input 
              type="password" 
              className="w-full outline-none p-3 mt-3 bg-gray-50 rounded-xl" 
              value={repetirPassword} 
              onChange={e=>setRepetirPassword(e.target.value)}
            />
          </div>

          {/* SUBMIT */}
          <input 
            type="submit" 
            value="Create account!" 
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-3 hover:cursor-pointer hover:bg-indigo-800 md:w-auto text-center justify-center" 
          />
        </form>

        {/* LINKS */}
        <div>
          <nav className="mt-10 lg:flex lg:justify-between">
            <Link to="/" className="block text-center my-5 text-gray-500">You already have an account? Login</Link>

            <Link to="/forgot-password" className="block text-center my-5 text-gray-500">Forgotten Password</Link>
          </nav>
        </div>
        </div>
      </>
    )
  }
  
  export default Register;