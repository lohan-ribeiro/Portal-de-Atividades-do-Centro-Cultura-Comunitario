const URL_API = ""

// Obter as atividades
export const activies = async() => {
    const token = localStorage.getItem("token")

    const response = await fetch(`${URL_API}/atividades`, {
        method:"GET",
        headers: { Authorization: `Bearer ${token}` },
    })

    if(!response.ok){
        throw new Error("Não foi possivel carregar as atividades")
    }

    return response.json()
}

// Adicionar atividades


// Excluir atividade(s)