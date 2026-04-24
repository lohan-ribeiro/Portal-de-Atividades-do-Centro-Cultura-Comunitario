import Remover from "../../assets/icon/trash.svg?react"
import Editar from "../../assets/icon/pen.svg?react"

import "./Admin.css"


const Admin = () => {


  
  return (
    <div className="container-admin">
      <h1>Bem-vindo Admin</h1>

      <div className="box-filters" aria-label="Filtros da tabela de atividades">
        <select name="atividade" id="atividade">
          <option value="volei">Volei</option>
          <option value="PPDI">Psicomotricidade para Pessoa com Deficiência/Intelectual</option>
        </select>
        <select name="professor" id="professor">
          <option value="reginaldo">Reginaldo</option>
        </select>
        <select name="turno" id="turno">
          <option value="matutino">Matutino</option>
        </select>
        <select name="idade" id="idade">
          <option value="idoso">Idoso</option>
          <option value="50anos">Acima de 50 anos</option>
        </select>
        <input type="text" />

        <button type="create">Add atividade</button>
      </div>

      <div className="box-table">
        <table aria-label="Tabela de atividades">
          <thead>
            <tr>
              <th scope="col">Atividade</th>
              <th scope="col">Nível</th>
              <th scope="col">Turno</th>
              <th scope="col">Idade</th>
              <th scope="col">Professor(a)</th>
              <th scope="col">Dias da Semana</th>
              <th scope="col">Horário</th>
              <th scope="col">Local</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Circuito de ginástica</th>
              <td>Iniciante</td>
              <td>matutino</td>
              <td>idoso</td>
              <td>joao</td>
              <td>Seg/Quarta/Sexta</td>
              <td>8h às 9h</td>
              <td>Sala de Dança</td>
              <td>
                <div className="action-group">
                  <button>
                    <Editar className="icon-editar"/>
                  </button>
                  <button>
                    <Remover className="icon-remover"/>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">Jump</th>
              <td>basico</td>
              <td>matutino</td>
              <td>De 11 a 17 anos</td>
              <td>joao</td>
              <td>quinta e quarta</td>
              <td>10h a 11h</td>
              <td>ginasiio</td>
              <td>
                <div className="action-group">
                  <button>
                    <Editar className="icon-editar"/>
                  </button>
                  <button>
                    <Remover className="icon-remover"/>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">Hidroginástica/Condicionamento Físico</th>
              <td>Iniciante e intermediário</td>
              <td>matutino</td>
              <td>Acima de 50 anos</td>
              <td>Reginaldo</td>
              <td>quinta e quarta</td>
              <td>10h a 11h</td>
              <td>ginasiio</td>
              <td>
                <div className="action-group">
                  <button>
                    <Editar className="icon-editar"/>
                  </button>
                  <button>
                    <Remover className="icon-remover"/>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">Psicomotricidade para Pessoa com Deficiência/Intelectual</th>
              <td>Nível II e III</td>
              <td>VESPERTINO</td>
              <td>Juvenil</td>
              <td>joao</td>
              <td>Segunda-feira</td>
              <td>13h30 às 14h30</td>
              <td>Quadra Externa</td>
              <td>
                <div className="action-group">
                  <button>
                    <Editar className="icon-editar"/>
                  </button>
                  <button>
                    <Remover className="icon-remover"/>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
          
        </table>
      </div>
    </div>
  )
}

export default Admin
