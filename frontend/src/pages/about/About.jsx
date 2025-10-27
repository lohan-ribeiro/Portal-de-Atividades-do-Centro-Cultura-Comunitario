import styles from "./About.module.css"
import logoUnivesp from "../../assets/img/logoUnivesp.png"

function About(){
    
    return (
        <main>
            <div className={styles.container}>
                <div className={styles.background}>
                    <section className={styles.content_about} aria-labelledby="Sobre nós">
<<<<<<< HEAD
                        <h1>Sobre  <span>Nós</span></h1>
=======
                        <h1>Quem Somos <span>Nós</span>?</h1>
>>>>>>> frontend
                        <p>
                            Somos um grupo de estudantes do eixo de Computação da <a href="https://univesp.br/" target="blank" rel="noreferrer">UNIVESP</a> e, como proposta para o Projeto Integrador,
                            identificamos que o CEU Rosa da China oferece diversas atividades gratuitas para a comunidade local.
                            No entanto, percebemos que a divulgação dessas oportunidades ainda é limitada e não alcança todo o público
                            que poderia se beneficiar delas.<br/>
                            Com isso em mente, desenvolvemos este site como mais um canal de divulgação, para levar a um número maior 
                            de pessoas da região as atividades oferecidas pelo CEU Rosa da China, abrangendo áreas como esporte, lazer 
                            e educação. Além disso, buscamos garantir que a plataforma seja acessível, permitindo que qualquer pessoa 
                            possa utilizá-la de forma simples e inclusiva.
                        </p>
                    </section>

                    <section className={styles.content_team} aria-labelledby="Nossa equipe">
                        <h2><span>Nossa</span>  Equipe:</h2>
                        <ul>
                            <li>Felipe da Silva Faria de Oliveira</li>
                            <li>Rafael Dias de Santi</li>
                            <li>Rodrigo Souza Machado Bitener</li>
                            <li>Ronald Odair Oliveira Juliao</li>
                            <li>Wilson Ademar de Arruda</li>
                            <li>Lohan Ribeiro Cerqueira</li>
                            <li>Lucas Sousa Fraga</li>
                        </ul>
                    </section>
                </div>
                
                    <a className={styles.content_Univesp} href="https://univesp.br/" target="blank" rel="noreferrer">
                        <img  
                        src={logoUnivesp} 
                        alt="Logo da UNIVESP - Universidade Virtual do Estado de São Paulo" />
                    </a>
                
            </div>
        </main>
    )
}

export default About