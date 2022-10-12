import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import clienteAxios from "../config/axios";
import Alerta from "../components/Alerta"

const ConfirmAccount = () => {
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
    const [cargando, setCargando] = useState(true);
    const [alerta, setAlerta] = useState({});

    const params = useParams();
    const {token}= params;
    useEffect(() => {
      const confirmAccount = async () => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/veterinarios/confirm/${token}`;
            const {data} = await clienteAxios.get(url);
            setCuentaConfirmada(true);
            setAlerta({msg: data.msg, error: false})
        } catch (error) {
            setAlerta({msg: error.response.data.msg, error: true});
        }
        setCargando(false);
      }
      confirmAccount();
    }, [])
    

    return(
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">Manage your<span className="text-black"> patients</span></h1>
            </div>
            <div className="mt-20 md:mt-5 shadow-lg p-10 rounded-lg bg-white">
                {!cargando && <Alerta
                    alerta={alerta}
                />}
                {cuentaConfirmada && (
                    <Link to="/" className="block text-center my-5 text-gray-500">Login</Link>
                )}
            </div>  
        </>
    )
}
  
export default ConfirmAccount;