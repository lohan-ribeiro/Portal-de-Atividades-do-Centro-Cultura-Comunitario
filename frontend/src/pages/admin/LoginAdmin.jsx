import EyeClosed from "../../assets/icon/eye-crossed.svg?react"
import Eye from "../../assets/icon/eye.svg?react"
import Profile from "../../assets/icon/user.svg?react"

import { useUserLogin } from "../../hook/useUserLogin"
import { useState } from "react"

import "./LoginAdmin.css"

const LoginAdmin = () => {

  const[password, setPassword] = useState("")
  const[username, setUsername] = useState("")
  const[showPassword, setShowPassword] = useState(false)

  const{
    handleSubmit,
    loginError
  } = useUserLogin(username, password)

  return (
    <div className="container-login">
      <form method="POST" onSubmit={handleSubmit} aria-label="Formulário de acesso">
        <h1>Acessar conta</h1>

        <div className="input-field">
          <Profile className="icon-profile"/>
          <input 
            type="text" 
            placeholder=" "
            id="usuario"
            name="usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="username"
            aria-describedby={loginError ? "login-erro" : undefined}
            />
            <label>Usuário</label>
        </div>
        
        <div className="input-field">
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder=" "
            id="senha"
            name="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            aria-describedby={loginError ? "login-erro" : undefined}
            />
            <label>Senha</label>
          <button 
            className="btn-showpassword" 
            type="button"
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            aria-pressed={showPassword}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <Eye className="icon-password"/> 
              : <EyeClosed className="icon-password"/>}
          </button>
        </div>
        
        <button type="submit" className="btn-entry">
          Entrar
        </button>

        {loginError && (
          <>
            <p 
              role="alert"
              id="login-erro"
              className="error-message"  
              aria-live="polite"
            >
              {loginError}
            </p>
          </>
        )}

      </form>
    </div>
  )
}

export default LoginAdmin
