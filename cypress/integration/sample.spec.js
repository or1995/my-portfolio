
describe('My First Test', function() {
    it('Find an element', function () {
        cy.visit('/');
        
        cy.pause()

        cy.contains('type').click()

        cy.url()
        .should('include', '/commands/actions')

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })
})