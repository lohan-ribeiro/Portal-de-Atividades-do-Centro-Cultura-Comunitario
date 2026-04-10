import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


// regra para rota privada
export default function PrivateRoute() {
  const { user } = useAuth()

  // se não estiver logado é redirecionado para página de login.
  if (!user) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}