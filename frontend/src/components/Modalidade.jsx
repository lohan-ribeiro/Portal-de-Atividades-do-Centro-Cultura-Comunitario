import PropTypes from "prop-types"
import styles from "./Modalidade.module.css"

//cards com as atividades do CEU rosa da china
function Modalidade ({atividade, horario, dia, professor, lugar}){

    return(
        <div>

        </div>
    )
}

//o proptypes garante que qualquer manipulaçao feita por outro programador, garanta que o tipo de dado passado seja o correto.
//no caso do proptype ele gera erro a nivel aplicação, ou seja, so o programador ira ver esse erro.
item.PropTypes = {
    atividade:PropTypes.string.isRequired,
    professor:PropTypes.string,
    local:PropTypes.string.isRequired
//adicionar o outro itens que irao no card
}

item.defaultProps = {
    professor:"Não especificado"
//adicionar valores padroes para os campos nao obrigatorios
}

export default Modalidade