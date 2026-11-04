describe('Compras', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })

  it('Adicionar Mochila e Luz de Bicicleta no carrinho', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2')

  })

  it('Finalizar Compra', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Hora do')
    cy.get('[data-test="lastName"]').type('QA')
    cy.get('[data-test="postalCode"]').type('25620-160')
    cy.get('[data-test="continue"]').click()
    
    cy.get('[data-test="finish"]').click()
    cy.contains('Thank you for your order!').should('be.visible')

  })

})