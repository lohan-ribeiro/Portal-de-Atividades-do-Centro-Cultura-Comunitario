
import styles from "./Contact.module.css"

function Contact(){

    return(
        <div className={StyleSheet.container}>
            <header>
                <h1 className={styles.title}>Entre em Contato</h1>
            </header>
            
            <section >
                <div className={styles.container_contact}>
                    <ul className={styles.item}>
                        <li>Telefone: (11) 2701-2358</li>
                        <li>Email: atendimentoceurosadachina@gmail.com</li>
                    </ul>
                    <p>Siga-nos:</p>
                    <ul>
                        <li>face</li>
                        <li>insta</li>
                    </ul>
                </div>
                <div className={styles.container_form}>
                    <h2>Formulário de Contato</h2>
                    <form action="" >
                        <label htmlFor="name">Nome:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="nome" 
                            placeholder="digite seu nome" 
                            required/>

                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="exemplo@email.com" 
                            required/>

                        <label htmlFor="name">Mensagem:</label>
                        <textarea 
                            name="mensage" 
                            id="mensage" 
                            placeholder="digite sua mensagem aqui" 
                            rows={4} 
                            required>
                        </textarea>

                        <button type="submt">Enviar</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact