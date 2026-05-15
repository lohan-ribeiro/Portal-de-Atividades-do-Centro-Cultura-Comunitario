import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import Select from "react-select"

import { useAdminForm } from "../hooks/useAdminForm"

import "./FormAddActivity.css"


const FormAddActivity = ({ariaLabel}) => {
  const navigate = useNavigate()
  const location = useLocation()

  const options = [
    { value: "Matutino", label: "Matutino" },
    { value: "Vespertino", label: "Vespertino" },
    { value: "Noturno", label: "Noturno" },
  ];

  const {
    formData,
    isUpdate,
    handleSubmit,
    handleChange
  } = useAdminForm(location.state)

  const customSelectStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,

      borderRadius: "8px",
      border: state.isFocused
        ? "2px solid #FF7A00"
        : "2px soilid #fff",

      boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",

      cursor: "pointer",

      "&:hover": {
        border: "2px solid #FF7A00"
      }
    }),
  }


  return (
    <div className="container-form-register">
      <form 
        className="form-create" 
        aria-label={ariaLabel}
        onSubmit={handleSubmit}
      >
        <div className="form-grid">

          <div className="input-group">
            <label>Nome
            <input 
              type="text" 
              name="nome"
              id="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="ex: basquete"
              required
            />
            </label>
          </div>

          <div className="input-group">
            <label>Nível
            <input 
              type="text" 
              name="nivel"
              id="nivel"
              value={formData.nivel}
              onChange={handleChange}
              placeholder="ex: Iniciante"
              required
            />
            </label>
          </div>

          <div className="input-group">
            <label>Turno
              <Select
                options={options}
                value={options.find(
                  (options) => options.value == formData.turno)}
                onChange={handleChange}
                placeholder="Turno"
                maxMenuHeight={180}
                styles={customSelectStyles}
                required
              />
            </label>
          </div>

          <div className="input-group">
            <label>Idade
            <input 
              type="text" 
              name="idade"
              id="idade"
              value={formData.idade}
              onChange={handleChange}
              placeholder="ex: 14 anos"
              required
            />
            </label>
          </div>

          <div className="input-group">
            <label>Analista
            <input 
              type="text" 
              name="analista"
              id="analista"
              value={formData.analista}
              onChange={handleChange}
              placeholder="ex: Fulano"
            />
            </label>
          </div>

          <div className="input-group">
            <label>Dias da semana
            <input 
              type="text" 
              name="dias_semana"
              id="dias_semana"
              value={formData.dias_semana}
              onChange={handleChange}
              placeholder="ex: Seg / Ter / Quar"
            />
            </label>
          </div>

          <div className="input-group">
            <label>Horário
            <input 
              type="text" 
              name="horario"
              id="horario"
              value={formData.horario}
              onChange={handleChange}
              placeholder="ex: 14h a 16h"
            />
            </label>
          </div>

          <div className="input-group">
            <label>Local
            <input 
              type="text" 
              name="local"
              id="local"
              value={formData.local}
              onChange={handleChange}
              placeholder="ex: sala multiuso"
            />
            </label>
          </div>
            
        </div>

        <div className="box-btn-form">
          <button className="btn-cancel" type="button" onClick={() => navigate("/admin")}>
            Cancelar
          </button>

          <button  className="btn"  type="submit">
            {isUpdate ? "Salvar" : "Criar"}
          </button>
        </div>
        
      </form>
    </div>
  )
}

export default FormAddActivity
