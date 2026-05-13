import { useState } from "react"
import Select from "react-select"

import Remover from "../../assets/icon/trash.svg?react"
import Add from "../../assets/icon/plus.svg?react"
import Editar from "../../assets/icon/edit.svg?react"

import { useAdmin } from "../../features/admin/hooks/useAdmin"
import ModalDeleteActivie from "../../features/admin/components/ModalDeleteActivie.jsx"

import "./Admin.css"

// TO DO:
// Aumenta tamanho do checkbox, add funçao para os botoes, 
// tamanho fixo para os select e input, rolagem horizontal para tabela, 
// arrumar responsividade e acessibilidade, criar os serviços para admin,
// organizar estrutura de arquivos e add Toast

const Admin = () => {
  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [openForm, setOpenForm] = useState(false)

  const {
    selectedActivities,
    filteredActivities,
    filters,
    setFilters,
    loadActivities,
    handleSelectActivity,
    handleSelectAll,
    handleDeleteActivie,
    activityOptions,
    analistaOptions,
    turnoOptions,
    idadeOptions
  } = useAdmin()

  
  return (
    <div className="container-admin">
      <h1>Bem-vindo Admin</h1>

      <div className="content-admin">
        <div
          className="box-filters"
          aria-label="Filtros da tabela de atividades"
        >
          {/* ATIVIDADE */}
          <Select
            className="filter-select"
            options={activityOptions}
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

          {/* BUSCA */}
          <input
            type="text"
            name="search"
            placeholder="Buscar atividade"
            value={filters.search}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                search: e.target.value
              }))
            }
          />

          {/* ADD */}
          <button type="button">
            <Add className="icon-add" />
          </button>

          {/* REMOVE */}
          <button type="button" onClick={() => setOpenModalDelete(true)}>
            <Remover className="icon-remove" />
          </button>
        </div>

        <ModalDeleteActivie 
          isOpen={openModalDelete} 
          setModalOpen={() => setOpenModalDelete(false)} 
          HandleDelete={handleDeleteActivie} 
        />

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
                      <button type="button">
                        <Editar className="icon-editar" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredActivities.length === 0 && (
                <tr>
                  <td
                    colSpan="11"
                    style={{
                      textAlign: "center",
                      padding: "1rem"
                    }}
                  >
                    Nenhuma atividade encontrada
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Admin