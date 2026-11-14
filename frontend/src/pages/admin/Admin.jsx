import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import Select from "react-select"

import Remover from "../../assets/icon/trash.svg?react"
import Add from "../../assets/icon/plus.svg?react"
import Editar from "../../assets/icon/edit.svg?react"

import { useAdminTable } from "../../features/admin/hooks/useAdminTable.js"

import ModalDeleteActivie from "../../features/admin/components/ModalDeleteActivie.jsx"

import "./Admin.css"


const Admin = () => {
  const [openModalDelete, setOpenModalDelete] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const {
    isEdit,
    selectedActivities,
    filteredActivities,
    filters,
    setFilters,
    handleIsEdit,
    handleSelectActivity,
    handleSelectAll,
    handleDeleteActivity,
    activityOptions,
    analistaOptions,
    turnoOptions,
    idadeOptions,
    nivelOptions
  } = useAdminTable(location.state)

  const customFilterStyles = {
    control: (base, state) => ({
      ...base,

      minHeight: "42px",
      borderRadius: "8px",

      border: state.isFocused
        ? "2px solid #FF7A00"
        : "2px solid #fff",

      boxShadow: "none",
      outline: "none",
      cursor: "pointer",

      "&:hover": {
        border: "2px solid #FF7A00"
      }
    }),

    valueContainer: (base) => ({
      ...base,
      padding: "0px 8px"
    }),

    placeholder: (base) => ({
      ...base,
      color: "#6b7280"
    }),

    menu: (base) => ({
      ...base,
      zIndex: 9999
    })
  }
  
  return (
    <main className="container-admin">
      <div className="content-introduction">
        <h1>Bem-vindo Admin</h1>
        <p>
          Gerencie todas as atividades disponíveis no Centro Cultural Comunitário.
          Utilize esta área para adicionar novas atividades, editar informações
          ou remover atividades existentes.
          Todas as alterações feitas aqui aparecem automaticamente na página principal.
        </p>
      </div>

      <div className="content-management-admin">
        <div
          className="box-filters"
          aria-label="Filtros da tabela de atividades"
        >
          {/* ATIVIDADE */}
          <Select
            className="filter-select-atividade"
            options={activityOptions}
            styles={customFilterStyles}
            placeholder="Atividade"
            isClearable
            isSearchable
            maxMenuHeight={250}
            value={
              filters.atividade
                ? {
                    value: filters.atividade,
                    label: filters.atividade
                  }
                : null
            }
            onChange={(selectedOption) =>
              setFilters((prev) => ({
                ...prev,
                atividade: selectedOption
                  ? selectedOption.value
                  : ""
              }))
            }
          />

          {/* ANALISTA */}
          <Select
            className="filter-select"
            options={analistaOptions}
            styles={customFilterStyles}
            placeholder="Professor"
            isClearable
            isSearchable
            maxMenuHeight={180}
            value={
              filters.analista
                ? {
                    value: filters.analista,
                    label: filters.analista
                  }
                : null
            }
            onChange={(selectedOption) =>
              setFilters((prev) => ({
                ...prev,
                analista: selectedOption
                  ? selectedOption.value
                  : ""
              }))
            }
          />

          {/* TURNO */}
          <Select
            className="filter-select"
            options={turnoOptions}
            styles={customFilterStyles}
            placeholder="Turno"
            isClearable
            isSearchable
            maxMenuHeight={180}
            value={
              filters.turno
                ? {
                    value: filters.turno,
                    label: filters.turno
                  }
                : null
            }
            onChange={(selectedOption) =>
              setFilters((prev) => ({
                ...prev,
                turno: selectedOption
                  ? selectedOption.value
                  : ""
              }))
            }
          />

          {/* IDADE */}
          <Select
            className="filter-select"
            options={idadeOptions}
            styles={customFilterStyles}
            placeholder="Idade"
            isClearable
            isSearchable
            maxMenuHeight={180}
            value={
              filters.idade
                ? {
                    value: filters.idade,
                    label: filters.idade
                  }
                : null
            }
            onChange={(selectedOption) =>
              setFilters((prev) => ({
                ...prev,
                idade: selectedOption
                  ? selectedOption.value
                  : ""
              }))
            }
          />
          {/* NÍVEL */}
          <Select
            className="filter-select"
            options={nivelOptions}
            styles={customFilterStyles}
            placeholder="Nível"
            isClearable
            isSearchable
            maxMenuHeight={180}
            value={
              filters.nivel
                ? {
                    value: filters.nivel,
                    label: filters.nivel
                  }
                : null
            }
            onChange={(selectedOption) =>
              setFilters((prev) => ({
                ...prev,
                nivel: selectedOption
                  ? selectedOption.value
                  : ""
              }))
            }
          />

          <div className="box-btn-filters">
            {/* ADD */}
            <button 
              type="button" 
              onClick={() => navigate("criar-atividade")}
              title="Adicionar atividade"
            >
              <Add className="icon-add" />
            </button>

            {/* REMOVE */}
            <button 
              type="button" 
              onClick={() => {
                if(selectedActivities.length > 0){
                  setOpenModalDelete(true)
                }}
              }
              title="Remover atividade selecionada"
              >
              <Remover className="icon-remove" />
            </button>
          </div>
        </div>

        <ModalDeleteActivie 
          isOpen={openModalDelete} 
          setModalOpen={() => setOpenModalDelete(false)} 
          handleDelete={handleDeleteActivity} 
        />

        <div className="table-wrapper">
          <div className="box-table">
            <table aria-label="Tabela de atividades">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      checked={
                        filteredActivities.length > 0 &&
                        selectedActivities.length ===
                          filteredActivities.length
                      }
                      title="Selecionar todas as atividades"
                    />
                  </th>

                  <th>ID</th>
                  <th>Atividade</th>
                  <th>Nível</th>
                  <th>Turno</th>
                  <th>Idade</th>
                  <th>Professor(a)</th>
                  <th>Dias da Semana</th>
                  <th>Horário</th>
                  <th>Local</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {filteredActivities.map((atividade) => (
                  <tr key={atividade.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedActivities.includes(
                          atividade.id
                        )}
                        onChange={() =>
                          handleSelectActivity(atividade.id)
                        }
                        title="seleciona atividade"
                      />
                    </td>

                    <td>{atividade.id}</td>
                    <td>{atividade.nome}</td>
                    <td>{atividade.nivel}</td>
                    <td>{atividade.turno}</td>
                    <td>{atividade.idade}</td>
                    <td>{atividade.analista}</td>
                    <td>{atividade.dias_semana}</td>
                    <td>{atividade.horario}</td>
                    <td>{atividade.local}</td>

                    <td>
                      <div className="action-group">
                        <button type="button" onClick={() => handleIsEdit(atividade)}>
                          <Editar className="icon-editar" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredActivities.length === 0 && (
                  <tr>
                    <td colSpan="11" className="empty-table">
                      Nenhuma atividade encontrada
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Outlet/>
    </main>
  )
}

export default Admin