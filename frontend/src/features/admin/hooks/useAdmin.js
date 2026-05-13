import { useEffect, useState } from "react"

import { formatText } from "../../../utils/FormatText"
import { 
  activities, deleteActivity, deleteActivities,
  updateActivity, createActivity 
} from "../services/AdminService"

import banco from "../../../../db.json"


function getInitialFormData(atividade){
  return{
    nome: atividade?.nome || "",
    nivel: atividade?.nivel || "",
    turno: atividade?.turno || "",
    idade: atividade?.idade || "",
    analista: atividade?.analista || "",
    dias_semana: atividade?.dias_semana || "",
    horario: atividade?.horario || "",
    local: atividade?.local || "",
  }
}

export function useAdmin(atividade) {

  // Estados 
  const [atividades, setAtividades] = useState([])
  const [selectedActivities, setSelectedActivities] = useState([])
  const [formData, setFormData] = useState(() => getInitialFormData(atividade))
  const [isUpdate, setIsUpdate] = useState(false)

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

  // Mudar o estado de isUpdate
  const handleIsUpdate = (mode) => (e) => {
    e.preventDefault()

    setIsUpdate(mode)
  }

  // Estruturar os dados da atividade
  const handleChange = (e) => {
    const {nome, value} = e.target

    setFormData(prev => ({
      ...prev, [name]: value
    }))
  }

  // Obter as atividades
  const loadActivities = async () => {
    try {
      // const data = await activies()
      const data = banco

      const formattedData = data.map((atividade) => ({
        ...atividade,

        nome: formatText(atividade.nome),
        nivel: formatText(atividade.nivel),
        turno: formatText(atividade.turno),
        idade: formatText(atividade.idade),
        analista: formatText(atividade.analista),
        local: formatText(atividade.local)
      }))

      setAtividades(formattedData)

    } catch (error) {
      console.log(error)
    }
  }

  // Adicionar ou atualizar atividade
  const handleAddActivity = async(e) => {
    e.preventDefault()

    try {

      // Cria um objeto para a atividade
      const data = new FormData()

      // Dados da atividade(nome,nivel,idade,etc)
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key])
      })


      if(isUpdate){
        await updateActivity(atividade?.id, data)
      }else{
        await createActivity(data)

        // Limpa o formulário
        setFormData(getInitialFormData())
      }

       // Atualiza a tabela
      await loadActivities()

    } catch (error) {
        console.error("Erro ao adicionar a atividade!")
    }
  }

  // Deletar uma ou mais atividade
  const handleDeleteActivity = async(e, ids) => {
    e.preventDefault()

    try {

      if(ids?.length === 1){
        await deleteActivity(ids[0])
      }else{
        await deleteActivities(ids)
      }

    } catch (error) {
      if(ids.length === 1){
        console.error("Erro ao excluir atividade!")
      }else{
        console.error("Erro ao excluir as atividades!")
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

      (filters.search === "" ||
        atividade.nome
        ?.toLowerCase()
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
    formData,
    isUpdate,
    selectedActivities,
    filteredActivities,
    filters,
    setFilters,
    loadActivities,
    handleIsUpdate,
    handleChange,
    handleSelectActivity,
    handleSelectAll,
    handleDeleteActivity,
    activityOptions,
    analistaOptions,
    turnoOptions,
    idadeOptions
  }
}