describe('Projects Test', function() {
    it('Compare data and rendered elements size', function() {
        cy.visit('/')
        cy.window().its('app._context.provides.store.getters.allProjects')  // the only way to get vuex store here since the data is local is to send the app to the window and get it here (if the data is coming from a server it would of been easier to get the data without the window using cy.request). i will build another website with nuxt and use http requests
        .then(projectsData => {
            cy.visit('/projects');
            cy.get('.allcards').children()
            .then(card => {
                expect(card.length).to.eq(projectsData.length)
            })
        })
    })

    it('See if the current project in Vuex the same as the URL', function() { // I can loop on all products but its not recommended to use loops with cypress, testing one project will be enough anyway since all projects share the same logic 
        cy.visit('/projects/ecommerceshop')
        cy.window().its('app._context.provides.store.getters.currentProject')  
        .then(projectData => {
            expect(projectData.name.toLowerCase().replaceAll(' ', '')).to.eq('ecommerceshop')
        })
    })
})

describe('Projects Navigation Test', function() {
    it('Ecommerce', function() {
        cy.visit('/projects');
        cy.get('.project > .title > h3').contains("ECommerce Shop").click({force: true});
        cy.url().should('include', '/projects/ecommerceshop');
    })

    it('Hello', function() {
        cy.visit('/projects');
        cy.get('.project > .title > h3').contains("Hello Blog").click({force: true});
        cy.url().should('include', '/projects/helloblog');
    })

    it('Social', function() {
        cy.visit('/projects');
        cy.get('.project > .title > h3').contains("Social Media App").click({force: true});
        cy.url().should('include', '/projects/socialmediaapp');
    })

    it('Portfolio', function() {
        cy.visit('/projects');
        cy.get('.project > .title > h3').contains("My Portfolio").click({force: true});
        cy.url().should('include', '/projects/myportfolio');
    })

    it('Snake', function() {
        cy.visit('/projects');
        cy.get('.project > .title > h3').contains("Snake Game").click({force: true});
        cy.url().should('include', '/projects/snakegame');
    })

    it('University', function() {
        cy.visit('/projects');
        cy.get('.project > .title > h3').contains("University Website").click({force: true});
        cy.url().should('include', '/projects/universitywebsite');
    })

    it('Nature', function() {
        cy.visit('/projects');
        cy.get('.project > .title > h3').contains("Nature Landing").click({force: true});
        cy.url().should('include', '/projects/naturelanding');
    })
})

