import { useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

import { loginUser } from "../services/AuthService"
import { validarEmail } from "../utils/ValidateEmail"


export function useUserLogin (username, password) {

    const navigate = useNavigate()
    const[loginError, setLoginError] = useState("")


    const saveAuth = (data) => {
        localStorage.setItem("token", data.token)
    }


    const handleSubmit = async(e) =>{
        e.preventDefault()

        try {
            setLoginError("")
    
            const data = await loginUser(username, password)

            toast.success("Acesso autorizado!")
    
            // Salva so dados do usuário.
            saveAuth(data)

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