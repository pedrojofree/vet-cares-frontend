import { useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";

const NewPassword = () => {
  const [password, setPassword] = useState("")
  const [alerta, setAlerta] = useState({})
  const [tokenValido, setTokenValido] = useState(false)
  const [passModificado, setPassModificado] = useState(false)

  const params = useParams()
  const {token} = params;

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/veterinarios/forgot-password/${token}`)
        setAlerta({msg: "Write your new password"})
        setTokenValido(true)
      } catch (error) {
        setAlerta({msg: "Error with link", error: true})
      }
    }
    comprobarToken()
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(password.length < 6){
      setAlerta({msg: "Password should have more than 6 characters", error: true});
      return
    }
    try {
      const url = `/veterinarios/forgot-password/${token}`
      const {data} = await clienteAxios.post(url, {password});

      setAlerta({msg: data.msg});
      setPassModificado(true);
    } catch (error) {
      setAlerta({msg: error.response.data.msg, error: true})
    }
  }
  const {msg} = alerta;

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">Reset your<span className="text-black"> password</span></h1>
        <h1 className="text-indigo-600 font-black text-2xl mt-5">And start administering your furry patients.</h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg p-10 rounded-lg bg-white">
        {msg && <Alerta
            alerta={alerta}
        />}
        {tokenValido && (
        <>
          <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block  text-xl font-bold">New Password</label>
            <input 
              type="password" 
              placeholder="Here"
              className="w-full outline-none p-3 mt-3 bg-gray-50 rounded-xl" 
              value={password} 
              onChange={e=>setPassword(e.target.value)}
            />
            </div>
            <input 
              type="submit" 
              value="Reset Password" 
              className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-3 hover:cursor-pointer hover:bg-indigo-800 md:w-auto text-center justify-center" 
            />
          </form>
          <div>
        </div>
        </>
        )}
        {passModificado &&           
          <nav className="mt-10 lg:flex lg:justify-between">
            <Link to="/" className="block text-center my-5 text-gray-500">Login</Link>

            <Link to="/register" className="block text-center my-5 text-gray-500">Register</Link>
          </nav>}
      </div>
    </>
  )
};
export default NewPassword