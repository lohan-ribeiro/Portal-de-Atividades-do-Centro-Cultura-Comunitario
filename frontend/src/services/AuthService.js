// Validação de login
export const loginUser = async(username, password) => {
    const response = await fetch('/login', {
        method: "POST",
        headers: {"Content-Type": "application/json",},

        // Ajustar os nomes dos campos do body no front para bater com os da API
        body: JSON.stringify({ login: username, password}),
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || "Erro no login")
    }

    return data
}