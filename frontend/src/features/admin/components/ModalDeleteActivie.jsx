import Trash from "../../../assets/icon/trash.svg?react"

import "./ModalDeleteActivie.css"


export default function ModalDeleteActivie({isOpen, setModalOpen, handleDelete}) {
  if(isOpen){
    return (
      <div className="background-modal">
        <div className="container-modal">
          <h1 className="title">Tem certeza que deseja apagar essa(s) atividade(s)?</h1>
          
          <div>
            <p>
              Essa ação não poderá ser desfeita e todos os dados 
              relacionados à atividade serão removidos permanentemente 
              e <strong>não poderão ser recuperados</strong>.
            </p>
          </div>

          <div className="modal-box-btn">
            <button className="btn-delete" type="button" onClick={handleDelete}>
              <Trash className="icon-trash"/> Apagar
            </button>
            <button className="btn-cancel" type="button" onClick={setModalOpen}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    )
  }
  return null
}