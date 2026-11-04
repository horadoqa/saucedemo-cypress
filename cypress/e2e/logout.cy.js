
describe('Logout', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve realizar o Logout', () => {

    // Realizar login
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Validar acesso à página de produtos
    cy.contains('Products').should('be.visible')

    // Abrir menu lateral
    cy.get('#react-burger-menu-btn').should('be.visible').click()

    // Clicar em Logout
    cy.get('[data-test="logout-sidebar-link"]')
      .should('be.visible')
      .click()

    // Validar logout
    cy.get('[data-test="login-button"]').should('be.visible')

  })

})
