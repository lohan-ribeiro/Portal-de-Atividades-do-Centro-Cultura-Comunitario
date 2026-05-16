import logo from "../../assets/img/CEU_footer.png"
import Social from "../../components/IconsAnimated/SocialFooter"

import { NavLink } from "react-router-dom"

import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      <address>
        <div className={styles.content_footer}>
          <div className={styles.container_ceuInformation}>
            <NavLink to="/" aria-label="Voltar para página inicial">
              <img
                src={logo}
                alt="CEU Rosa da China"
                className={styles.logo_ceu}
              />
            </NavLink>
            <section aria-label="Informações de contato do CEU Rosa da China">
              <ul className={styles.contact} >
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
            </section>
          </div>
          <section aria-label="Redes socias do CEU Rosa da China">
            <div className={styles.social}>
              <p>Siga-nos:</p>
              <div className={styles.social_icons}>
                <Social/>
              </div>
            </div>
          </section>
        </div>
      </address>
      <div className={styles.copyright}>
          <p>
            &copy; 2025-2026 Todos os direitos reservados Projeto Integrador 3
          </p>
      </div>
    </footer>
  )
}

export default Footer
