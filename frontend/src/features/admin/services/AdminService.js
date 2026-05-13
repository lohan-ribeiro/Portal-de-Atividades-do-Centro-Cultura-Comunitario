const URL_API = import.meta.env.VITE_API_URL

// Obter as atividades
export const activities = async() => {
    const token = localStorage.getItem("token")

    const response = await fetch(`${URL_API}/atividades`, {
        method:"GET",
        headers: { Authorization: `Bearer ${token}` }
    })

    if(!response.ok){
        throw new Error("Não foi possivel carregar as atividades")
    }

    return response.json()
}

// Adicionar atividade
export const createActivity = async(data) => {
    const token = localStorage.getItem("token")

    const response = await fetch(`${URL_API}/atividades`, {
        method:"POST",
        headers: { 
            "Content-Type": "application/json",
             Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(data)
    })

    if(!response.ok){
        throw new Error("Não foi possivel adicionar a atividade")
    }

    return response.json()
}

// Atualizar atividade
export const updateActivity = async(id, data) => {
    const token = localStorage.getItem("token")

    const response = await fetch(`${URL_API}/atividades/${id}`, {
        method:"PUT",
        headers: { 
            "Content-Type": "application/json",
             Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(data)
    })

    if(!response.ok){
        throw new Error("Não foi possivel atualizar a atividade")
    }

    return response.json()
}

// Excluir atividade
export const deleteActivity = async(id) => {
    const token = localStorage.getItem("token")

    const response = await fetch(`${URL_API}/atividades/${id}`, {
        method:"DELETE",
        headers: { 
            "Content-Type": "application/json",
             Authorization: `Bearer ${token}` 
        }
    })

    if(!response.ok){
        throw new Error("Não foi possivel excluir a atividade")
    }

    return response.json()
}

// Excluir mais de uma atividade
export const deleteActivities = async(data) => {
    const token = localStorage.getItem("token")

    const response = await fetch(`${URL_API}/deletar-atividades`, {
        method:"DELETE",
        headers: { 
            "Content-Type": "application/json",
             Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({
            ids: data
        })
    })

    if(!response.ok){
        throw new Error("Não foi possivel excluir as atividades")
    }

    return response.json()
}