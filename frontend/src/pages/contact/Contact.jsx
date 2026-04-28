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
              (11) 2701-2358
          </li>
          <li>
            <Envelope className= {styles.item_icons} aria-hidden="true" focusable="false" />{" "}
            <a href="mailto:atendimentoceurosadachina@gmail.com" className={styles.email}>
              atendimentoceurosadachina@gmail.com
            </a>
          </li>
          <li>
            <Pinmap className= {styles.item_icons} aria-hidden="true" focusable="false" />{" "}
            <a
              href="https://maps.app.goo.gl/Rp8foy6VvnwMxZxr5"
              target="_blank"
              rel="noreferrer"
              className={styles.location}
              aria-label="Abrir endereço no Google Maps em uma nova aba"
            >
              Rua Clara Petrela, 113, São Paulo, SP, Brazil, 03978-500
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
            href="https://instagram.com/ceu.rosadachina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acessar Instagram CEU Rosa da China"
          />

          <FacebookIcon
            as="a"
            href="https://www.facebook.com/ceurosachina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acessar página do Facebook CEU Rosa da China"
          />
        </div>
      </section>

      <FormContact/>

    </div>
  );
}

export default Contact;
