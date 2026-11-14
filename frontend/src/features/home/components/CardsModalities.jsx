import PropTypes from "prop-types"

import styles from "./CardsModalities.module.css"

//cards com as atividades do Centro Cultural Comunitário
function CardsActivities ({activity}){
    if(!activity) return null;

    return(
        <article className={styles.card} aria-label={`Informaçoes sobre a atividade ${activity.nome.toLowerCase()}`}>
            <h3>{activity.nome}</h3>
            <p><strong>Idade: </strong>{activity.idade}</p>
            <p><strong>Nível: </strong>{activity.nivel}</p>
            <p><strong>Turno: </strong>{activity.turno}</p>
            <p><strong>Horário: </strong>{activity.horario}</p>
            <p><strong>Dias: </strong>{activity.dias_semana}</p>
            <p><strong>Responsável: </strong>{activity.analista}</p>
            <p><strong>Local: </strong>{activity.local}</p>
            <p><strong>Disponivel em: </strong>{activity.disponivel_em}</p>
        </article>
    )
}

//o proptypes garante que qualquer manipulaçao feita por outro programador, garanta que o tipo de dado passado seja o correto.
//no caso do proptype ele gera erro a nivel aplicação, ou seja, somente o programador ira ver esse erro.
CardsActivities.propTypes = {
    activity:PropTypes.shape({
        idade:PropTypes.string.isRequired,
        nível:PropTypes.string.isRequired,
        turno:PropTypes.string.isRequired,
        horario:PropTypes.string.isRequired,
        dias:PropTypes.string.isRequired,
        professor:PropTypes.string,
        local:PropTypes.string,
        disponivel_em:PropTypes.string.isRequired
    }),
};

CardsActivities.defaultProps = {
    activity: {
        professor:"Não especificado",
        local:"Não especificado",
    //adiciona valores padroes para os campos não obrigatorios
    },

};

export default CardsActivities