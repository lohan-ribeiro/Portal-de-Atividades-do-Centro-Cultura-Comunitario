import FormAddActivity from '../../features/admin/components/FormAddActivity'

import "./EditActivity.css"


const EditActivity = () => {
  return (
    <div className='container-edit-activity'>
        <div className='content-edit'>
            <h1>Editar atividade</h1>
            <FormAddActivity ariaLabel={"Formulário de atualização da atividade"}/>
        </div>
    </div>
  )
}

export default EditActivity
