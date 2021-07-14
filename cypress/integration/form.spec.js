describe('Form inputs test', function() {
    it('Home Contact Form', function() {
        cy.visit('/')
        cy.get('#name').type('test name').should('have.value', 'test name');
        cy.get('#email').type('test@email.com').should('have.value', 'test@email.com');
        cy.get('#message').type('message content').should('have.value', 'message content');

    })

    it('Contact Page Form', function() {
        cy.visit('/contact')
        cy.get('#name').type('test name').should('have.value', 'test name');
        cy.get('#email').type('test@email.com').should('have.value', 'test@email.com');
        cy.get('#message').type('message content').should('have.value', 'message content');
    })
})