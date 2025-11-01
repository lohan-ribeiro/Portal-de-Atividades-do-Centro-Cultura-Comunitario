import { FaFacebook, FaInstagram} from "react-icons/fa"
import styles from "./Footer.module.css"
import logo from "../../assets/img/CEU_footer.png"
import { NavLink } from "react-router-dom"

function Footer() {
  return (
    <footer className={styles.footer}>
      <address>
        <div className={styles.content_footer}>
          <div className={styles.container_ceuInformation}>
            <NavLink to="/">
              <img
                src={logo}
                alt="CEU Rosa da China"
                className={styles.logo_ceu}
              />
            </NavLink>
            <ul className={styles.contact}>
              <li><span>Telefone:</span>{" "} (11) 2701-2358</li>
              <li><span>Endereço:</span>{" "}
                <a href="https://maps.app.goo.gl/Rp8foy6VvnwMxZxr5" target="_blank" rel="noreferrer">
                  Rua Clara Petrela, 113, São Paulo, SP, Brazil, 03978-500
                </a>
              </li>
              <li><span>E-mail:</span>{" "} 
                <a href="mailto:atendimentoceurosadachina@gmail.com" className={styles.email}>
                  atendimentoceurosadachina@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.social}>
            <p>Siga-nos:</p>
            <div className={styles.social_icons}>
              <a href="https://www.facebook.com/ceurosachina" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebook className={styles.social_face}/>
              </a>
              <a href="https://instagram.com/ceu.rosadachina" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram className={styles.social_insta}/>
              </a>
            </div>
          </div>
        </div>
      </address>
      <div className={styles.copyright}>
          <p>
            &copy; 2025 Todos os direitos reservados Projeto Integrador 2
          </p>
      </div>
    </footer>
  )
}

export default Footer
