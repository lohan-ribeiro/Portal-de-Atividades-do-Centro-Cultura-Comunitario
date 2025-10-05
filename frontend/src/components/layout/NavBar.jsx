import { NavLink } from "react-router-dom"
import styles from "./NavBar.module.css"
import logo from "../assets/img/logo do CEU rosa da china 2.jpg"

function NavBar(){

    return(
        <nav className= {styles.navbar}>
            <NavLink>
                <img src={logo} alt="logo do CEU Rosa da China" className={styles.logo} />
            </NavLink>
            
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink to="/">INÍCIO</NavLink>
                    </li>
                <li className={styles.item}>
                    <NavLink to="/Contact">CONTATO</NavLink>
                    </li>
                <li className={styles.item}>
                    <NavLink to="/About">SOBRE</NavLink>
                    </li> 
            </ul>
        </nav>
    )
}

export default NavBar