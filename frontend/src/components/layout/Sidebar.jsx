import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import BotaoCompartilhar from '../layout/BotaoCompartilhar';
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <>
      {/* Botão Hamburguer - Visível apenas no mobile */}
      <button className={styles.hamburger} onClick={toggleMenu}>
        <span className={active ? styles.barActive : styles.bar}></span>
        <span className={active ? styles.barActive : styles.bar}></span>
        <span className={active ? styles.barActive : styles.bar}></span>
      </button>

      {/* Menu Lateral */}
      <nav className={`${styles.sidebar} ${active ? styles.sidebarActive : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><NavLink to="/" onClick={toggleMenu}>Início</NavLink></li>          
          <li className={styles.navItem}><NavLink to="/About" onClick={toggleMenu}>Sobre o CEU</NavLink></li>
          <li className={styles.navItem}><NavLink to="/Contact" onClick={toggleMenu}>Contato</NavLink></li>
        </ul>
        <div className={styles.share_wrapper}>
         <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BotaoCompartilhar />
        </div>
      </nav>

      {/* Fundo escurecido quando o menu abre */}
      {active && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </>
  );
}

export default Sidebar;