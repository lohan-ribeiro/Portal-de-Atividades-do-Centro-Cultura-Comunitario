// import PropTypes from "prop-types"
// import styles from "./SelectActivies.module.css"

// function SelectAtivies({ name, options, labelField, onSelect, selectedValue }) {

//     const artigo = (name) => {
//         if (name === "atividade" || name === "idade") return "uma";
//         if (name === "nível") return "um";
//         return "";
//     }

//     const handleChange = (e) => { //"e" é o evento disparado quando o usuário escolhe uma nova opção no "SELECT".
//         onSelect(e.target.value)
//     }

//     return (
//         <div className={styles.container}>
//             {/* controlado pelo estado selectedValue */}
//             <select name={name} id={name} onChange={handleChange} value={selectedValue || ""} aria-label={`Filtro de ${name}`}>
//                 {/* as opções vem direto do BD para o option pelo "options" */}
//                 <option value="" disabled hidden>
//                     Selecione {artigo(name)} {name}
//                 </option>

//                 {/* como "OPTIONS" é um array de itens, usasse ".MAP" para percorre-lo e guarda os itens em "OPTION" */}
//                 {options.map((option) => (
//                     <option value={option[labelField]} key={option.id}>
//                         {option[labelField]}
//                         {/* "labelfield" é uma chave dinânmica que define qual value será usado no select*/}
//                     </option>
//                 ))}
//             </select>
//         </div>
//     )
// }

// //propTypes para garantir segurança do tipo de dado passado para "NAME","OPTIONS","ID",etc. erro a nivel de programação.
// SelectAtivies.propTypes = {
//     name: PropTypes.string.isRequired,
//     options: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//         })
//     ).isRequired,
//     labelField: PropTypes.string.isRequired,
//     onSelect: PropTypes.func.isRequired,
//     selectedValue: PropTypes.string, 
// }

// export default SelectAtivies

//===============================================================================================================
import PropTypes from "prop-types"
import styles from "./SelectActivies.module.css"

function SelectAtivies({ name, options, labelField, onSelect, selectedValue }) {

    const handleChange = (e) => { //"e" é o evento disparado quando o usuário escolhe uma nova opção no "SELECT".
        onSelect(e.target.value)
    }

    const placeholderText = (name) => {
        if (name === "atividade") return "Todas as atividades";
        if (name === "idade") return "Todas as idades";
        if (name === "nível") return "Todos os níveis";
        return "Selecione uma opção";
    }

    return (
        <div className={styles.container}>
            {/* controlado pelo estado selectedValue */}
            <select name={name} id={name} onChange={handleChange} value={selectedValue || ""} aria-label={`Filtro de ${name}`}>
                {/* as opções vem direto do BD para o option pelo "options" */}
                <option value="">{placeholderText(name)}</option>

                {/* como "OPTIONS" é um array de itens, usasse ".MAP" para percorre-lo e guarda os itens em "OPTION" */}
                {options.map((option) => (
                    <option value={option[labelField]} key={option.id}>
                        {option[labelField]}
                        {/* "labelfield" é uma chave dinâmica que define qual value será usado no select*/}
                    </option>
                ))}
            </select>
        </div>
    )
}

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
