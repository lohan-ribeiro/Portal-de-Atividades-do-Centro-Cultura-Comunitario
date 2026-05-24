import logo from "../../assets/img/CEU_navbar.png"
import { NavLink } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

import styles from "./NavBar.module.css"

function NavBar(){
    const { user, logout } = useAuth()

    return(
        <header>
            <nav aria-label="Navegação principal" className= {styles.navbar}>
                
                <NavLink to="/" aria-label="Voltar para página inicial">
                    <img src={logo} alt="CEU Rosa da China" className={styles.logo} />
                </NavLink>
                
                <ul className={styles.list}>
                    <li>
                        <NavLink to="/">INÍCIO</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">SOBRE</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">CONTATO</NavLink>
                    </li> 
                    {user && (
                        <>
                            <li>
                                <NavLink to="/admin">PAINEL</NavLink>
                            </li>
                            <li>
                                <button onClick={logout} className={styles.logoutBtn} aria-label="Sair da conta">
                                    SAIR
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar