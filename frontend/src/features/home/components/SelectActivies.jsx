import { forwardRef } from "react";
import PropTypes from "prop-types";

import styles from "./SelectActivies.module.css";


/*
  Usamos forwardRef para permitir que o componente pai envie uma referência (ref)
  para o elemento <select>. Assim, conseguimos dar foco no select quando
  o usuário clicar no botão "Limpar".
*/
const SelectAtivies = forwardRef(function SelectAtivies(
    { name, options, labelField, onSelect, selectedValue },
    ref
){

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
            <select 
            ref={ref} 
            name={name} 
            id={name} 
            onChange={handleChange} 
            value={selectedValue || ""} 
            aria-label={`Filtro de ${name}`}>
                {/* as opções vem direto do BD para o option pelo "options" */}
                <option value="">{placeholderText(name)}</option>

                {/* "options" é uma lista vinda do Banco de Dados.
                    Como é um array, fazemos ".map" para gerar cada <option>.
                */}
                {options.map((option) => (
                <option value={option[labelField]} key={option.id}>
                    {option[labelField]}
                    {/* "labelField" define dinamicamente qual valor será exibido */}
                </option>
                ))}
            </select>
        </div>
    );
});

/* PropTypes para garantir que os dados recebidos são válidos
   — ajuda a identificar erros durante o desenvolvimento. */
SelectAtivies.prototype = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        })
    ).isRequired,
    labelField: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedValue: PropTypes.string,
};

export default SelectAtivies;

