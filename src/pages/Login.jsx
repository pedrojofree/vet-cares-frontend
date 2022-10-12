import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [alerta, setAlerta] = useState({})
  const navigate = useNavigate()

  const {setAuth} = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password){
      setAlerta({msg: "There are missing fields", error: true})
      return
    }
    try {
      const {data} = await clienteAxios.post("/veterinarios/login", {email, password});
      localStorage.setItem("token", data.token);
      setAuth(data)
      navigate("/admin")
    } catch (error) {
      setAlerta({msg: error.response.data.msg, error: true})
      return
    }
  }

  const {msg} = alerta;
  return (
    <> 
      <div className="">
        <h1 className="text-indigo-600 font-black text-6xl">Login and manage your <span className="text-black">patients</span></h1>
        <h1 className="text-indigo-500 font-bold text-2xl mt-10">Introducing my first Software as a Service (SaaS). Fully adapted to keep track of our most cared pets.</h1>
        <h1 className="text-indigo-500 font-bold text-xl mt-4">It offers a confortable manangment system for any pet. <span className="text-green-500">Add</span>, <span className="text-blue-400">edit</span>, and <span className="text-red-500">delete</span> registers whenever you need.</h1>
        

        <div className="flex justify-evenly relative mt-10">
          <a href="https://www.linkedin.com/in/pedro-jofre/" target="_blank" rel="noopener noreferrer"><i className="devicon-linkedin-plain colored text-7xl mt-10"></i></a>
        </div>
        <div className="flex justify-evenly relative mt-5">
          <i className="devicon-nodejs-plain colored text-7xl mt-10"></i>
          <i className="devicon-react-original colored text-7xl mt-10"></i>
          <i className="devicon-mongodb-plain colored text-7xl mt-10"></i>
          <i className="devicon-tailwindcss-plain colored text-7xl mt-10"></i>
          
        </div>
    
      </div>
      
      <div className="mt-20 md:mt-5 shadow-lg p-10 rounded-lg bg-white">
        {msg && <Alerta
          alerta={alerta}
        />}
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block  text-xl font-bold">Email</label>
            <input 
              type="text" 
              placeholder="Your Email" 
              className="w-full outline-none p-3 mt-3 bg-gray-50 rounded-xl"
              value={email}
              onChange= {e => setEmail(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block  text-xl font-bold">Password</label>
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full outline-none p-3 mt-3 bg-gray-50 rounded-xl" 
              value={password}
              onChange= {e => setPassword(e.target.value)}
              />
          </div>
          <input type="submit" value="Login!" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-3 hover:cursor-pointer hover:bg-indigo-800 md:w-auto text-center justify-center" />
        </form>
        <div>
          <nav className="mt-10 lg:flex lg:justify-between">
            <Link to="/register" className="block text-center my-5 text-gray-500">First time here? Register your account.</Link>

            <Link to="/forgot-password" className="block text-center my-5 text-gray-500">Forgotten Password</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Login;