import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  // recuperar login ao iniciar
  useEffect(() => {
    const userStorage = localStorage.getItem('user')
    const tokenStorage = localStorage.getItem('token')

    if (userStorage && tokenStorage) {
      setUser(JSON.parse(userStorage))
    } else {
      // Garante limpeza se algum estiver faltando
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    }
  }, [])

  // fazer o login e salvar no localstorage
  const login = (dadosUsuario) => {
    // dadosUsuario esperado: { token, user: { id, login } }
    setUser(dadosUsuario.user)
    localStorage.setItem('user', JSON.stringify(dadosUsuario.user))
    localStorage.setItem('token', dadosUsuario.token)
  }

  // deslogar e apaga o localstorage
  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () => useContext(AuthContext)
