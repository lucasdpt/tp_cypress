describe('Check counter of not completed tasks', () => {
    const task1 = 'Update my instagram'
    const task2 = 'Hack the White House'

    beforeEach(() => {
        cy.visit('http://localhost:3030')
        cy.get('.new-todo').type(`${task1}{enter}`)
        cy.get('.new-todo').type(`${task2}{enter}`)
    })

    it('Check counter of tasks', () => {
        cy.get('.todo-count')
            .should('contain', '1')
    })

    it('Update counter after check a task', () => {
        cy.contains(task1)
            .parents('li')
            .find('input[type="checkbox"]')
            .check({ force: true })

        cy.get('.todo-count')
            .should('contain', '1')
    })

    it('Update counter after add a new task', () => {
        cy.get('.new-todo').type(`Watch the Lord of the Rings (in long version){enter}`)
        cy.get('.todo-count')
            .should('contain', '1')
    })
})
