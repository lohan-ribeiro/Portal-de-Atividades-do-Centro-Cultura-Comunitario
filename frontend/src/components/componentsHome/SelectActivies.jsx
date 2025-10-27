import PropTypes from "prop-types"
import styles from "./SelectActivies.module.css"

<<<<<<< HEAD
function SelectAtivies({name, options, labelField, onSelect}){
=======
function SelectAtivies({ name, options, labelField, onSelect, selectedValue }) {
>>>>>>> frontend

    const artigo = (name) => {
        if (name === "atividade" || name === "idade") return "uma";
        if (name === "nível") return "um";
        return "";
    }

    const handleChange = (e) => { //"e" é o evento disparado quando o usuário escolhe uma nova opção no "SELECT".
<<<<<<< HEAD
        const SelectId = Number(e.target.value) //converte o valor(string => int) selecionado nas opções do SELECT(ex:ID:"1" NOME:"natação").
        onSelect (SelectId) //funçao "onSelect" enviar o ID para homepage, para saber qual item foi selecionado para os outros filtros(NIVEL e IDADE).

    }

    return(
        <div className={styles.container}>
            <select name={name} id={name} onChange={handleChange} defaultValue="">
                {/* as opções vem direto do BD para o option pelo "options" */}
                <option value="" disabled selected hidden> 
                    Selecione {artigo(name)} {name}
                </option>
                {/* como "OPTIONS" é um array de itens usasse ".MAP" para percorre-lo e guarda os itens em "OPTION" */}
                {options.map((option) => ( 
                    <option value={option.id} key={option.id}>
                        {option[labelField]}
                        {/* "labelfield" é uma chave dinânmico que define qual value será usado no select*/}
                    </option>
                ))}
                
=======
        onSelect(e.target.value)
    }

    return (
        <div className={styles.container}>
            {/* controlado pelo estado selectedValue */}
            <select name={name} id={name} onChange={handleChange} value={selectedValue || ""} aria-label={`Filtro de ${name}`}>
                {/* as opções vem direto do BD para o option pelo "options" */}
                <option value="" disabled hidden>
                    Selecione {artigo(name)} {name}
                </option>

                {/* como "OPTIONS" é um array de itens, usasse ".MAP" para percorre-lo e guarda os itens em "OPTION" */}
                {options.map((option) => (
                    <option value={option[labelField]} key={option.id}>
                        {option[labelField]}
                        {/* "labelfield" é uma chave dinânmica que define qual value será usado no select*/}
                    </option>
                ))}
>>>>>>> frontend
            </select>
        </div>
    )
}

<<<<<<< HEAD
//propTypes para garantir segurança do tipo de dado passado para "NAME","OPTIONS","ID",etc. erro a nivel de programaçâo.
SelectAtivies.propTypes = {
    name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf( //como OPTIONS é um array, tem-se que garantir que seu conteúdo seja do tipo correto.
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  labelField: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}


export default SelectAtivies
=======
//propTypes para garantir segurança do tipo de dado passado para "NAME","OPTIONS","ID",etc. erro a nivel de programação.
SelectAtivies.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
    labelField: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedValue: PropTypes.string, 
}

export default SelectAtivies
>>>>>>> frontend
