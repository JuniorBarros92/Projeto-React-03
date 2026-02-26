import Header from "../components/Header";

function Form() {
  
  function btnSalvar() {
    alert("salvo com sucesso")
  }
  
  
  
  
    return (
    <>
      <div>
        <Header title="Form Page" />
        <div>
          <form>
            <fieldset>
              <legend>Cadastro</legend>
              <div>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div>
                <label htmlFor="idade">Idade:</label>
                <input type="number" id="idade" name="idade" />
              </div>
              <div>
                <label htmlFor="uf">UF:</label>
                <select id="uf" name="uf">
                  <option value="">Selecione</option>
                  <option value="SP">SP</option>
                  <option value="RJ">RJ</option>
                  <option value="MG">MG</option>
                </select>
              </div>
              <button onClick={btnSalvar}>salvar cadastro</button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
