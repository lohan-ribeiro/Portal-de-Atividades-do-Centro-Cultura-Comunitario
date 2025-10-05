import styles from "./About.module.css"

function About(){
    
    return (
        <div className={styles.container}>
            <header>
                <h1 className={styles.title}>Sobre Nós</h1>
            </header>

            <section >
                <p className={styles.content}>
                    Somos um grupo de estudantes do eixo de Computação da UNIVESP e, como proposta para o Projeto Integrador,
                    identificamos que o CEU Rosa da China oferece diversas atividades gratuitas para a comunidade local.
                    No entanto, percebemos que a divulgação dessas oportunidades ainda é limitada e não alcança todo o público
                    que poderia se beneficiar delas.<br/>
                    Com isso em mente, desenvolvemos este site como mais um canal de divulgação, para levar a um número maior 
                    de pessoas da região as atividades oferecidas pelo CEU Rosa da China, abrangendo áreas como esporte, lazer 
                    e educação. Além disso, buscamos garantir que a plataforma seja acessível, permitindo que qualquer pessoa 
                    possa utilizá-la de forma simples e inclusiva.
                </p>
            </section>

            <section >
                <h3 className={styles.h3}>Nossa Equipe:</h3>
                
                <ul className={styles.item}>
                    <li>Felipe da Silva Faria de Oliveira</li><br/>
                    <li>Rafael Dias de Santi</li><br/>
                    <li>Rodrigo Souza Machado Bitener</li><br/>
                    <li>Ronald Odair Oliveira Juliao</li><br/>
                    <li>Wilson Ademar de Arruda</li><br/>
                    <li>Lohan Ribeiro Cerqueira</li><br/>
                    <li>Lucas Souza Fraga</li><br/>
                </ul>
            </section>
        </div>
    )
}

export default About