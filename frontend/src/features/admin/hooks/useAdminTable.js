import { useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import toast from "react-hot-toast"

import { formatText } from "../../../utils/FormatText"
import { 
  getActivities, 
  deleteActivity, 
  deleteActivities
} from "../services/AdminService"


export function useAdminTable(atividade) {

  // Estados 
  const [atividades, setAtividades] = useState([])
  const [selectedActivities, setSelectedActivities] = useState([])
  const [isEdit, setIsEdit] = useState(false)

  const navigate = useNavigate()
  const loaded = useRef(false)

  const [filters, setFilters] = useState({
    atividade: "",
    analista: "",
    turno: "",
    idade: "",
    nivel: ""
  })

  // Torna a tabela dinâmica
  useEffect(() => {
    if(loaded.current) return

    loaded.current = true
    loadActivities()
  }, [])

  // Edição da atividade
  const handleIsEdit = (atividade) => {
    navigate(`/admin/editar-atividade`, {
      state: atividade
    })
  }

  // Obter as atividades
  const loadActivities = async () => {
    try {
      const data = await getActivities()

      const formattedData = data.map((atividade) => ({
        ...atividade,

        nome: formatText(atividade.nome),
        nivel: (atividade.nivel),
        turno: formatText(atividade.turno),
        idade: formatText(atividade.idade),
        analista: formatText(atividade.analista),
        local: formatText(atividade.local)
      }))

      setAtividades(formattedData)

    } catch (error) {
      console.error(error)
    }
  }


  // Deletar uma ou mais atividade
  const handleDeleteActivity = async(e) => {
    e.preventDefault()

    try {

      if(selectedActivities.length === 1){
        await deleteActivity(selectedActivities[0])
      }else{
        await deleteActivities(selectedActivities)
      }

      toast.success("Atividade excluida!")

    } catch (error) {
      if(selectedActivities.length === 1){
        console.error("Erro ao excluir atividade!")
        toast.error("Erro ao excluir atividade!")
      }else{
        console.error("Erro ao excluir as atividades!")
        toast.error("Erro ao excluir as atividades!")
      }
    }
  }


  // Selecionar atividade (checkbox)
  const handleSelectActivity = (id) => {
    setSelectedActivities((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id)
      }

      return [...prev, id]
    })
  }

  // Selecionar todas as atividades (checkbox)
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

      (filters.nivel === "" ||
        atividade.nivel === filters.nivel)
      
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

  const nivelOptions = [
    ...new Set(atividades.map((item) => item.nivel))
  ].map((nivel) => ({
    value: nivel,
    label: nivel
  }))

  return {
    isEdit,
    selectedActivities,
    filteredActivities,
    filters,
    setFilters,
    loadActivities,
    handleIsEdit,
    handleSelectActivity,
    handleSelectAll,
    handleDeleteActivity,
    activityOptions,
    analistaOptions,
    turnoOptions,
    idadeOptions,
    nivelOptions
  }
}