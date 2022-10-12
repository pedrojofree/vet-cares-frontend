import { Link } from "react-router-dom"

const AdminNav = () => {
  return (
    <nav className="flex gap-10">
        <Link 
            to="/admin/profile"
            className="font-bold uppercase text-gray-500 hover:text-indigo-800"
            >Profile
        </Link>
        <Link 
            to="/admin/change-password"
            className="font-bold uppercase text-gray-500 hover:text-indigo-800"
            >Change Password
        </Link>
    </nav>
  )
}

export default AdminNav