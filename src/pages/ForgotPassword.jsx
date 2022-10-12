import { Link } from "react-router-dom";
import { useState } from "react";
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async e => {
    e.preventDefault()
    if (email === "" || email.length < 6){
      setAlerta({msg:"The Email is required", error: true})
      return
    }
    try {
      const {data} = await clienteAxios.post("/veterinarios/forgot-password", {email});
      setAlerta({msg: data.msg})
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }
  const {msg}=alerta;
  return (
    <>  
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">Forgotten<span className="text-black"> password</span>?</h1>
        <h1 className="text-indigo-600 font-black text-2xl mt-5">No worries, put your email and you will recieve instructions to recover it.</h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg p-10 rounded-lg bg-white">
        {msg && <Alerta 
        alerta={alerta}
        />}
        <form onSubmit={handleSubmit}>

          <div className="my-5">
            <label className="uppercase text-gray-600 block  text-xl font-bold">Email</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} type="text" placeholder="Your Email" className="w-full outline-none p-3 mt-3 bg-gray-50 rounded-xl" />
          </div>

          <input type="submit" value="Send Email" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-3 hover:cursor-pointer hover:bg-indigo-800 md:w-auto text-center justify-center" />

        </form>
        <div>

          <nav className="mt-10 lg:flex lg:justify-between">
            <Link to="/register" className="block text-center my-5 text-gray-500">First time here? Register your account.</Link>

            <Link to="/" className="block text-center my-5 text-gray-500">You already have an account? Login</Link>
          </nav>

        </div>
      </div>
    </>
  )
}

export default ForgotPassword;