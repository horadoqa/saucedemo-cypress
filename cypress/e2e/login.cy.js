describe('Login', () => {

  beforeEach(() => {
    
    cy.visit('/')

  })

  it('Deve realizar o Login', () => {

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.contains('Products').should('be.visible')

  })

  it('Deve exibir erro ao tentar fazer login com credenciais inválidas', () => {

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('123456')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'do not match')

  })

  it('Deve exibir erro ao tentar fazer login com campos vazios', () => {

    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Username is required')

  })

  it('Deve exibir erro ao tentar fazer login com campo de senha vazio', () => {

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Password is required')

  })

})