import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Header = () => {

  const {cerrarSesion} = useAuth();

  return (
    <header className="py-5 bg-indigo-600">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <h1 className="font-bold text-4xl text-indigo-200 text-center mb-2">Vet <span className="text-white font-black">Cares</span></h1>
        <h1 className="font-bold text-2xl text-indigo-200 text-center">Patient <span className="text-white font-black">Manager</span></h1>
        <nav className="flex gap-4 flex-col items-center lg:flex-row mt-5 lg:mt-0">
          <Link className="text-white text-sm uppercase font-bold" to="/admin">Patients</Link>
          <Link className="text-white text-sm uppercase font-bold" to="/admin/profile">Profile</Link>

          <button onClick={cerrarSesion} type="button" className="text-white text-sm uppercase font-bold" >Log out</button>
        </nav>
      </div>
    </header>
  )
}

export default Header