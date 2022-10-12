import { BrowserRouter, Routes, Route } from "react-router-dom"

// PAGINAS PUBLICAS
import AuthLayout from "./layout/AuthLayout"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ForgotPassword from "./pages/ForgotPassword"
import NewPassword from "./pages/NewPassword"
import ConfirmAccount from "./pages/ConfirmAccount"

// CONTEXT PROCESSORS
import { AuthProvider } from "./context/AuthProvider"
import { PacientesProvider}  from "./context/PacientesProvider"

import AdministrarPacientes from "./pages/AdministrarPacientes"

// PAGINAS PRIVADAS
import RutaProtegida from "./layout/RutaProtegida"
import EditarPerfil from "./pages/EditarPerfil"
import CambiarPass from "./pages/CambiarPass"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PacientesProvider>
          <Routes>

            <Route path="/" element={<AuthLayout/>}>
              <Route index element={<Login/>}/>
              <Route path="register" element={<Register/>}/>
              <Route path="forgot-password" element={<ForgotPassword/>}/>
              <Route path="forgot-password/:token" element={<NewPassword/>}/>
              <Route path="confirm/:token" element={<ConfirmAccount/>}/>
            </Route>

            <Route path="/admin" element={<RutaProtegida/>}>
              <Route index element={<AdministrarPacientes/>}/>
              <Route path="profile" element={<EditarPerfil/>}/>
              <Route path="change-password" element={<CambiarPass/>}/>
            </Route>
          </Routes>
        </PacientesProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
