import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaHome} from "react-icons/fa"
import styles from "./Footer.module.css"
import logo from "../assets/img/logo do CEU rosa da china 2.jpg"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftsection}>
          <img
            src={logo}
            alt="logo do CEU Rosa da China"
            className={styles.logo}
          />
        
          <ul className={styles.contact}>
            <li><FaPhone/> Telefone: 2701-2358</li>
            <li><FaHome/> Endereço: Rua Clara Petrela, 113, São Paulo, SP, Brazil, 03978-500</li>
            <li><FaEnvelope/> Email: atendimentoceurosadachina@gmail.com</li>
          </ul>
        </div>
        <div className={styles.social}>
          <p>Siga-nos:</p>
          <div className={styles.icons}>
            <a href="https://www.facebook.com/ceurosachina" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/ceu.rosadachina" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <p className={styles.copyright}>
        &copy; 2025 Todos os direitos reservados Projeto Integrador 2
      </p>
    </footer>
  )
}

export default Footer
