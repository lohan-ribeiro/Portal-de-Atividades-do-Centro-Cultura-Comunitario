import FormAddActivity from "../../features/admin/components/FormAddActivity.jsx"

import "./CreateActivity.css"


const CreateActivity = () => {
  return (
    <div className="container-create-activity">
      <div className="content-create">
        <h1>Criar atividade</h1>
        <FormAddActivity ariaLabel={"Formulário de criação de atividade"}/>
      </div>
    </div>
  )
}

export default CreateActivity
