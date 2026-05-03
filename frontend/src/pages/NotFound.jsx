import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundLayer}></div>
      
      <div className={styles.content}>       
        <div className={styles.iconContainer}>
          <span className={styles.icon}>👻</span>
        </div>

        <div className={styles.textFrame}>
          <h1 className={styles.glitchTitle}>404</h1>
          <h2 className={styles.subtitle}>A página foi para o espaço 🚀 </h2>
          <p className={styles.description}>
            Parece que você se aventurou além dos limites do CEU, mas
            não se preocupe, ainda estamos aqui!
          </p>
          <div className={styles.actionArea}>
            <Link to="/" className={styles.modernButton}>
              Voltar à Página Inicial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;