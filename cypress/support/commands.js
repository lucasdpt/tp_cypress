// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('resetDb', () => {
    cy.visit('http://localhost:3030')

    cy.get('.todo-list li')
        .each($el => {
            cy.wrap($el)
                .find('.destroy')
                .invoke('show')
                .click()
        })
    
    const tasks = [
        "Ajouter Cypress au projet",
        "Identifier tous les cas à tester",
        "Implémenter les tests",
        "Mise en place de Gherkin (pour les courageux)",
        "Passer le projet en CI/CD"
    ]

    tasks.forEach(task => {
        cy.get('.new-todo')
            .type(task)
            .type('{enter}')
    })

})
