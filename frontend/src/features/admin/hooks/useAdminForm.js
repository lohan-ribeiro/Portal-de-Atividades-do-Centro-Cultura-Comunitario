import { useNavigate } from "react-router-dom"
import { useState } from "react"
import toast from "react-hot-toast"

import { createActivity, updateActivity } from "../services/AdminService"


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


export function useAdminForm(atividade) {

  const [formData, setFormData] = useState(() => getInitialFormData(atividade))
  const navigate = useNavigate()
  const isUpdate = !!atividade

  // Estruturar os dados da atividade
  const handleChange = (e) => {

    // React Select não retorna "e.target" então
    if (!e.target) {
      setFormData((prev) => ({
        ...prev,
        turno: e.value
      }))

      return
    }

    const {name, value} = e.target

    setFormData(prev => ({
      ...prev, [name]: value
    }))
  }

  // Adicionar ou atualizar atividade
  const handleSubmit = async(e) => {
    e.preventDefault()

    const hasEmptyField = Object.values(formData).some(
      (value) => !String(value).trim()
    )

    if(hasEmptyField){
      toast.error("Preencha todos os campos!")
      return
    }

    try {
      if(isUpdate){
        await updateActivity(atividade?.id, formData)
        toast.success("Atividade atualizada!")
        
        // Navega para admin
        navigate("/admin")
      }else{
        await createActivity(formData)
        toast.success("Atividade criada!")

        // Limpa o formulário
        setFormData(getInitialFormData())

        // Navega para admin
        navigate("/admin")
      }

    } catch (error) {
      if(isUpdate){
        console.error("Erro ao atualizar a atividade!")
        toast.error("Erro ao atualizar a atividade!")
      }else{
        console.error("Erro ao adicionar a atividade!")
        toast.error("Erro ao criar a atividade!")
      }
    }
  }



  return {
    formData,
    isUpdate,
    handleSubmit,
    handleChange
  }
}