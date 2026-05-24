import { useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

import { loginUser } from "../services/AuthService"
import { useAuth } from "../context/AuthContext"

export function useUserLogin (username, password) {
    const navigate = useNavigate()
    const { login } = useAuth()
    const [loginError, setLoginError] = useState("")

    const handleSubmit = async(e) =>{
        e.preventDefault()

        try {
            setLoginError("")
    
            const data = await loginUser(username, password)

            toast.success("Acesso autorizado!")
    
            // Salva os dados do usuário e o token no contexto e no localStorage.
            login(data)

            // Redirecionado para a página de admin.
            navigate("/admin")
    
        } catch (error) {
            setLoginError("Usuário ou senha inválidos!")
            console.log(error)
        }
    }  

    return {
        handleSubmit,
        loginError
    }
}