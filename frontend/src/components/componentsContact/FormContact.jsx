import Limpar from "../IconsAnimated/ButtonClear"

import emailjs from "@emailjs/browser";
import { useState, useRef, } from "react";
import { validarEmail } from "../../utils/ValidateEmail"; 

import styles from "./FormContact.module.css"

const FormContact = () => {

    const form = useRef();
    const firstInputRef = useRef(null)
    const [status, setStatus] = useState("");
    const [emailError, setEmailErro] = useState("");
    

    /* Função para enviar um e-mail ao CEU após a validação do endereço de e-mail */
    const sendEmail = (e) => {
        e.preventDefault();

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

    // referencia para voltar pro input de nome(acessibilidade) 
    // Função para limpar os campos do formulário 
    const limparCampos = () => {
        form.current.reset();
        setStatus("");
        setEmailErro("");
    };


    return (
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
                >
                </textarea>

                <div className={styles.buttons_group}>
                <button 
                    className={styles.button_send} 
                    type="submit" 
                    aria-label="Enviar formulário"
                >
                Enviar
                </button>
                <Limpar 
                    aria-label="Limpar formulário e voltar para o campo nome" 
                    onClick={() => {
                        limparCampos(); firstInputRef.current?.focus();
                    }}   
                />
                </div>

                {status && 
                    <p 
                        aria-live="polite" 
                        className={`${ status === "Enviado com sucesso!"? styles.send_sucess : styles.send_error}`}
                    >
                        {status}
                    </p>
                }
            </form>
        </section>
    )
}

export default FormContact
