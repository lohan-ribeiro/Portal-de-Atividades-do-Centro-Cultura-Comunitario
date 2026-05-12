
import "./FormAddActivie.css"

const ModalAddActivie = () => {
  return (
    <div>
      <form aria-label="Formulário de criação de atividade">
        <h1>Adicionar atividade</h1>

        <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
        </div>

        <div>
          <button type="button">Cancelar</button>
          <button type="submit">Criar</button>
        </div>
        
      </form>
    </div>
  )
}

export default ModalAddActivie
