describe('Remover item do carrinho', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })

  it('Remover Mochila no carrinho', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist')

  })
})