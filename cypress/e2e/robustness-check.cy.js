/// <reference types="cypress" />

describe('Robustness Check', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3030')
    })

    afterEach(() => {
        cy.resetDb()
    })

    it('Should handle multiple inputs with same name', () => {
        const task = 'Be robust and resilient'

        cy.get('.new-todo')
            .type(task)
            .type('{enter}')
        cy.get('.new-todo')
            .type(task)
            .type('{enter}')

        cy.get('.todo-list li')
            .filter(`:contains(${task})`)
            .should('have.length', 2)
    })

    it('Should delete only one of two identical tasks', () => {
        const task = 'Delete me once'

        cy.get('.new-todo')
            .type(task)
            .type('{enter}')
        cy.get('.new-todo')
            .type(task)
            .type('{enter}')

        cy.get('.todo-list li')
            .filter(`:contains(${task})`)
            .should('have.length', 2)

        cy.get('.todo-list li')
            .filter(`:contains(${task})`)
            .first()
            .find('.destroy')
            .invoke('show')
            .click()

        cy.get('.todo-list li')
            .filter(`:contains(${task})`)
            .should('have.length', 1)
    })
})