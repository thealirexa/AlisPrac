describe('Navigation Test', () => {
    it('successfully loads and navigates between routes', () => {
        cy.visit('http://localhost:5173/')

        cy.url().should('include', '/')

        cy.visit('http://localhost:5173/products')
        cy.url().should('include', '/products')

        cy.visit('http://localhost:5173/users')
        cy.url().should('include', '/users')

        cy.visit('http://localhost:5173/verification')
        cy.url().should('include', '/verification')
    })
})
