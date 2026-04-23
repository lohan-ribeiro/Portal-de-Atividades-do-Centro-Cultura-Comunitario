import "./Admin.css"

const Admin = () => {


  
  return (
    <div className="container-admin">
      <h1>pagina de administração</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Atividade</th>
            <th scope="col">Nível</th>
            <th scope="col">Turno</th>
            <th scope="col">Idade</th>
            <th scope="col">Professor</th>
            <th scope="col">Dias da Semana</th>
            <th scope="col">Horário</th>
            <th scope="col">Local</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">futsal</th>
            <td>basico</td>
            <td>matutino</td>
            <td>10</td>
            <td>joao</td>
            <td>quinta e quarta</td>
            <td>10h a 11h</td>
            <td>ginasiio</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Admin
