import logo from "../../assets/img/logo_footer.png"
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
                alt="Centro Cultural Comunitário"
                className={styles.logo_ceu}
              />
            </NavLink>
            <section aria-label="Informações de contato do Centro Cultural Comunitário">
              <ul className={styles.contact} >
                <li><span>Telefone:</span>{" "} (11) 3000-0000</li>
                <li><span>Endereço:</span>{" "}
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer">
                    Av. da Comunidade, 1000, São Paulo, SP, Brasil, 01000-000
                  </a>
                </li>
                <li><span>E-mail:</span>{" "} 
                  <a href="mailto:contato@centroculturalcomunitario.org" className={styles.email}>
                    contato@centroculturalcomunitario.org
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <section aria-label="Redes sociais do Centro Cultural Comunitário">
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
