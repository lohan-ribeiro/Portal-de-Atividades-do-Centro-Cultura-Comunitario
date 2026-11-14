import Envelope from "../../assets/icon/envelope.svg?react"
import Pinmap from "../../assets/icon/marcador.svg?react"
import Telefone from "../../assets/icon/chamada-telefonica.svg?react"
import Horario from "../../assets/icon/relogio.svg?react"

import FacebookIcon from "../../components/IconsAnimated/FacebookIcon"
import InstagramIcon from "../../components/IconsAnimated/InstagramIcon"

import Map from "../../components/ui/MapCeu.jsx"
import FormContact from "../../features/contact/components/FormContact.jsx"

import styles from "./Contact.module.css";
import BotaoCompartilhar from "../../components/layout/BotaoCompartilhar";
import Sidebar from '../../components/layout/Sidebar';


function Contact() {
  
  return (
    <div className={styles.container_contact}>
      <Sidebar /> 
      <section className={styles.content_contact} aria-labelledby="tituloContato">
        <h1 id="tituloContato">Contate-Nos</h1>
        <ul className={styles.item}>
          <li>
            <Map className={styles.mapWrapper}/>
          </li>
          <li>
            <Telefone className={styles.item_icons} aria-hidden="true" focusable="false"/>{" "}
              (11) 3000-0000
          </li>
          <li>
            <Envelope className= {styles.item_icons} aria-hidden="true" focusable="false" />{" "}
            <a href="mailto:contato@centroculturalcomunitario.org" className={styles.email}>
              contato@centroculturalcomunitario.org
            </a>
          </li>
          <li>
            <Pinmap className= {styles.item_icons} aria-hidden="true" focusable="false" />{" "}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className={styles.location}
              aria-label="Abrir endereço no Google Maps em uma nova aba"
            >
              Av. da Comunidade, 1000, São Paulo, SP, Brasil, 01000-000
            </a>
          </li>
          <li>
            <Horario className= {styles.item_icons} aria-hidden="true" focusable="false" />{" "}
              Seg a Sex: 8H - 20H | Sáb e Dom: 8H - 16h30H
          </li>
        </ul>
        <h2>Siga-nos:</h2>
        <div className={styles.social}>
          <InstagramIcon
            as="a"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acessar Instagram do Centro Cultural Comunitário"
          />

          <FacebookIcon
            as="a"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acessar página do Facebook do Centro Cultural Comunitário"
          />
        </div>
      </section>

      <FormContact/>

    </div>
  );
}

export default Contact;
