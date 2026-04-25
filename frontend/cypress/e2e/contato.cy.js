describe('Entrando na página Contato', () => {
  beforeEach(()=> {
    cy.visit('/Contact')
  })
  it('Verificar se carregou a página Contato',()=>{
    cy.contains('Formulário de Contato').should('be.visible')
  })
  it('Deve preencher o campo Nome',()=>{
    cy.get('input[placeholder="Digite seu nome"]').type('João Silva')
  })
  it('Deve preencher o campo Email',()=>{
    cy.get('input[placeholder="exemplo@email.com"]').type('joaosilva@hotmail.com')
  })
})