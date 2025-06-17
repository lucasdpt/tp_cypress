describe('Check filter task\'s', () => {
    const task1 = 'Sleep a loooot'
    const task2 = 'Eat sushi'

    beforeEach(() => {
        cy.visit('http://localhost:3030')

        cy.get('.new-todo').type(`${task1}{enter}`)
        cy.get('.new-todo').type(`${task2}{enter}`)
        cy.contains(task2)
            .parents('li')
            .find('input[type="checkbox"]')
            .check({ force: true })
        cy.contains('Tous').click()
    })

    afterEach(() => {
        cy.resetDb();
    });

    it('Filter : All / "Tous" ', () => {
        cy.contains('Tous').click()
        cy.wait(500)
        cy.contains(task1).should('exist')
        cy.contains(task2).should('exist')
    })

    it('Filter : not completed / "En cours" ', () => {
        cy.contains('En cours').click()
        cy.wait(500)
        cy.contains(task1).should('exist')
        cy.contains(task2).should('not.exist')
    })

    it('Filter : completed / "Fait"', () => {
        cy.contains('Fait').click()
        cy.wait(500)
        cy.contains(task1).should('not.exist')
        cy.contains(task2).should('exist')
    })
})
