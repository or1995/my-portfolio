describe('Projects Test', function() {
    it('first', function() {
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
})