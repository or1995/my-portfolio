describe('Desktop Navigation Test', function() {
    it('Projects', function() {
        cy.visit('/');
        cy.get('header > .nav-buttons > a > h1').contains("PROJECTS").click();
        cy.url().should('include', '/projects');
        cy.wait(1000);
        cy.get('.main-container').children().first().should('have.class', 'projects');
    })

    it('Resume', function() {
        cy.visit('/');
        cy.get('header > .nav-buttons > a > h1').contains("RESUME").click();
        cy.url().should('include', '/resume');
        cy.wait(1000);
        cy.get('.main-container').children().first().should('have.class', 'resume');
    })

    it('Contact', function() {
        cy.visit('/');
        cy.get('header > .nav-buttons > a > h1').contains("CONTACT ME").click();
        cy.url().should('include', '/contact');
        cy.wait(1000);
        cy.get('.main-container').children().first().should('have.class', 'contact');
    })

    it('About', function() {
        cy.visit('/');
        cy.get('header > .nav-buttons > a > h1').contains("ABOUT ME").click();
        cy.url().should('include', '/about');
        cy.wait(1000);
        cy.get('.main-container').children().first().should('have.class', 'aboutpage');
    })

    it('Home', function() {
        cy.visit('/about');
        cy.get('header > .logodiv').click();
        cy.url().should('include', '/');
        cy.wait(1000);
        cy.get('.main-container').children().first().should('have.class', 'home');
    })
})

describe('Mobile Navigation Test', function() {
    it('Projects', function() {
        cy.viewport(414, 846);
        cy.visit('/');
        cy.get('.menubutton').click();
        cy.get('.menu > a > h1').contains("PROJECTS").click();
        cy.url().should('include', '/projects');
        cy.wait(1000);
        cy.get('.main-container').children().first().should('have.class', 'projects');
    })

    it('Resume', function() {
        cy.viewport(414, 846);
        cy.visit('/');
        cy.get('.menubutton').click();
        cy.get('.menu > a > h1').contains("RESUME").click();
        cy.url().should('include', '/resume');
        cy.wait(1000);
        cy.get('.main-container').children().first().should('have.class', 'resume');
    })

    it('Contact', function() {
        cy.viewport(414, 846);
        cy.visit('/');
        cy.get('.menubutton').click();
        cy.get('.menu > a > h1').contains("CONTACT ME").click();
        cy.url().should('include', '/contact');
        cy.wait(1000);
        cy.get('.main-container').children().first().should('have.class', 'contact');
    })

    it('About', function() {
        cy.viewport(414, 846);
        cy.visit('/');
        cy.get('.menubutton').click();
        cy.get('.menu > a > h1').contains("ABOUT ME").click();
        cy.url().should('include', '/about');
        cy.wait(1000);
        cy.get('.main-container').children().first().should('have.class', 'aboutpage');
    })

    it('Home', function() {
        cy.viewport(414, 846);
        cy.visit('/about');
        cy.get('.menubutton').click();
        cy.get('.menu > a > h1').contains("HOME").click();
        cy.url().should('include', '/');
        cy.wait(1000);
        cy.get('.main-container').children().first().should('have.class', 'home');
    })
})