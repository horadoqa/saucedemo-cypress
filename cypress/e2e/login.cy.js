describe('Login', () => {

  it('Deve realizar o Login', () => {

    cy.visit('/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.contains('Products').should('be.visible')

  })

})