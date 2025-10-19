import PropTypes from "prop-types"
import styles from "./CardsModalities.module.css"

//cards com as atividades do CEU rosa da china
function CardsModalities ({modalidade}){
    if(!modalidade) return null;

    return(
        <div className={styles.card}>
            <h3>{modalidade.nome}</h3>
            <p><strong>Idade: </strong>{modalidade.idade}</p>
            <p><strong>Nivel: </strong>{modalidade.nivel}</p>
            <p><strong>Turno: </strong>{modalidade.turno}</p>
            <p><strong>Horario: </strong>{modalidade.horario}</p>
            <p><strong>Dias: </strong>{modalidade.dias}</p>
            <p><strong>Analista: </strong>{modalidade.professor}</p>
            <p><strong>Local: </strong>{modalidade.local}</p>
            <p><strong>Disponivel em: </strong>{modalidade.disponivel_em}</p>
        </div>
    )
}

//o proptypes garante que qualquer manipulaçao feita por outro programador, garanta que o tipo de dado passado seja o correto.
//no caso do proptype ele gera erro a nivel aplicação, ou seja, somente o programador ira ver esse erro.
CardsModalities.propTypes = {
    modalidade:PropTypes.shape({
        idade:PropTypes.string.isRequired,
        nivel:PropTypes.string.isRequired,
        turno:PropTypes.string.isRequired,
        horario:PropTypes.string.isRequired,
        dias:PropTypes.string.isRequired,
        professor:PropTypes.string,
        local:PropTypes.string.isRequired,
        disponivel_em:PropTypes.string.isRequired
    }),
};

CardsModalities.defaultProps = {
    modalidade: {
        professor:"Não especificado",
    //adicionar valores padroes para os campos nao obrigatorios
    },

};

export default CardsModalities