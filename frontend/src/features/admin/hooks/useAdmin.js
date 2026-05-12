import { useEffect, useState } from "react"

import { activies } from "../services/AdminService"
import banco from "../../../../db.json"


export function useAdmin() {

  // Estados 
  const [atividades, setAtividades] = useState([])
  const [selectedActivities, setSelectedActivities] = useState([])
  const [filters, setFilters] = useState({
    atividade: "",
    analista: "",
    turno: "",
    idade: "",
    search: ""
  })

  // Torna a tabela dinâmica
  useEffect(() => {
    loadActivities()
  }, [])

  // Obter as atividades
  const loadActivities = async () => {
    try {
      // const data = await activies()
      const data = banco

      setAtividades(data)
    } catch (error) {
      console.log(error)
    }
  }

  // Selecionar atividade
  const handleSelectActivity = (id) => {
    setSelectedActivities((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id)
      }

      return [...prev, id]
    })
  }

  // Selecionar todas as atividades
  const handleSelectAll = () => {
    if (selectedActivities.length === filteredActivities.length) {
      setSelectedActivities([])
      return
    }

    const allIds = filteredActivities.map(
      (atividade) => atividade.id
    )

    setSelectedActivities(allIds)
  }

  // Filtragem
  const filteredActivities = atividades.filter((atividade) => {
    return (
      (filters.atividade === "" ||
        atividade.nome === filters.atividade) &&

      (filters.analista === "" ||
        atividade.analista === filters.analista) &&

      (filters.turno === "" ||
        atividade.turno === filters.turno) &&

      (filters.idade === "" ||
        atividade.idade === filters.idade) &&

      (filters.search === "" ||
        atividade.nome
          .toLowerCase()
          .includes(filters.search.toLowerCase()))
    )
  })

  // Opções do select do react
  const activityOptions = [
    ...new Set(atividades.map((item) => item.nome))
  ].map((atividade) => ({
    value: atividade,
    label: atividade
  }))

  const analistaOptions = [
    ...new Set(atividades.map((item) => item.analista))
  ].map((analista) => ({
    value: analista,
    label: analista
  }))

  const turnoOptions = [
    ...new Set(atividades.map((item) => item.turno))
  ].map((turno) => ({
    value: turno,
    label: turno
  }))

  const idadeOptions = [
    ...new Set(atividades.map((item) => item.idade))
  ].map((idade) => ({
    value: idade,
    label: idade
  }))

  return {
    selectedActivities,
    filteredActivities,
    filters,
    setFilters,
    loadActivities,
    handleSelectActivity,
    handleSelectAll,
    activityOptions,
    analistaOptions,
    turnoOptions,
    idadeOptions
  }
}