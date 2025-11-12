import Envelope from "../../assets/icon/envelope.svg?react"
import Pinmap from "../../assets/icon/marcador.svg?react"
import Telefone from "../../assets/icon/chamada-telefonica.svg?react"
import Horario from "../../assets/icon/relogio.svg?react"

import FacebookIcon from "../../assets/IconsAnimated/FacebookIcon"
import InstagramIcon from "../../assets/IconsAnimated/InstagramIcon"
import Enviar from "../../assets/IconsAnimated/ButtonSend"
import Limpar from "../../assets/IconsAnimated/ButtonClear"

import { useState, useRef, } from "react";
import Map from "../../components/MapCeu"
import emailjs from "@emailjs/browser";

import styles from "./Contact.module.css";

function Contact() {
  const form = useRef();
  const firstInputRef = useRef(null)
  const [status, setStatus] = useState("");
  const [emailError, setEmailErro] = useState("");

  /* função para validar email a partir da ordem do caracteres. Não ideal, mas evita digitar qualquer coisa no email */
  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  

  /* Função para enviar um e-mail ao CEU após a validação do endereço de e-mail */
  const sendEmail = (e) => {
    e.preventDefault();

    //const email = form.current.from_email.value;
    const formEl = form.current;
    const email = formEl.user_email.value;


    if (!validarEmail(email)) {
      setEmailErro("Por favor, insira um email válido");
      return;
    } else {
      setEmailErro("");
    }

    // pegar data/hora formatada
    const agora = new Date();
    const data = agora.toLocaleDateString("pt-BR");
    const hora = agora.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const timeFormatado = `${data} às ${hora}`;

    // adiciona o time no form antes de enviar (matching com {{time}} no template do EmailJS)
    formEl.time.value = timeFormatado;

    /* parametros necessario para o envio do email */
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current, /* "form.current" é o conteúdo do meu formulário (nome, email, mensagem) */
        {publicKey:import.meta.env.VITE_EMAILJS_PUBLIC_KEY}
      )
      .then(
        () => {
          setStatus("Enviado com sucesso!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Erro ao enviar. Tente novamente.");
          firstInputRef.current?.focus();
        }
      );
  };

  /* referencia para voltar pro input de nome(acessibilidade) */

  /* Função para limpar os campos do formulário */
  const limparCampos = () => {
    form.current.reset();
    setStatus("");
    setEmailErro("");
  };

  return (
    <main >
      <div className={styles.container_contact}>
        <section className={styles.content_contact} aria-labelledby="tituloContato">
          <h1 id="tituloContato">Contate-Nos</h1>
          <ul className={styles.item}>
            <li>
              <Telefone className={styles.item_icons} aria-hidden="true" focusable="false"/> (11) 2701-2358
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
              <Horario className= {styles.item_icons} aria-hidden="true" focusable="false" /> Seg a Sex: 8H - 20H | Sáb e Dom: 8H - 16h30H
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

        <section className={styles.content_form} aria-labelledby="formulário">

          <h3 id="formulário">Formulário de Contato</h3>

          <form ref={form} onSubmit={sendEmail} aria-label="formulário de contato">
            
            {/* campo escondido */}
            <input type="hidden" name="time" />

            <label htmlFor="name">Nome:</label>
            <input 
              ref={firstInputRef} 
              type="text"
              name="user_name"
              id="name"
              placeholder="Digite seu nome" 
              required
              aria-required="true" 
              autoComplete="off"
            />

            <label htmlFor="email">E-mail:</label>
            <input 
              type="email" 
              name="user_email"
              id="email"
              placeholder="exemplo@email.com"
              required 
              aria-required="true" 
              autoComplete="off" 
              aria-invalid={emailError ? "true" : "false"}
              aria-describedby={emailError ? "emailError" : undefined}
            />
            {emailError && (
              <p id="emailError" aria-live="assertive">
                {emailError}
              </p>
            )}

            <label htmlFor="mensage">Mensagem:</label>
            <textarea
              name="message"
              id="mensage"
              placeholder="Digite sua mensagem aqui"
              rows={5}
              maxLength={400}
              required
              aria-required="true"
              autoComplete="off"
            ></textarea>

            <div className={styles.buttons_group}>
              <Enviar/>
              <Limpar 
                aria-label="Limpar formulário e voltar para o campo nome" 
                onClick={() => {
                  limparCampos(); firstInputRef.current?.focus();
                  }
                }
              />
            </div>

            {status && 
              <p 
                aria-live="polite" 
                className={`${ status === "Enviado com sucesso!"? styles.send_sucess : styles.send_error}`}
              >
                {status}
              </p>}
          </form>
        </section>
      </div>
      <section className={styles.container_map} aria-labelledby="Visite-nos">
          <h4 id="Visite-nos">Visite<span>-nos</span>!</h4>
          <Map/>
      </section>
    </main>
  );
}

export default Contact;
