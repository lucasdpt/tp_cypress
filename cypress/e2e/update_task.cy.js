describe('Update task', () => {
    const tache = 'Play video games a lot a lot a lot, during all the night';

    beforeEach(() => {
        cy.visit('http://localhost:3030');
        cy.get('.new-todo').type(`${tache}{enter}`);
        cy.contains(tache).should('exist');
    });

    it('To see that the task is end', () => {
        cy.contains(tache)
            .parent()
            .find('input[type="checkbox"]')
            .check()
            .should('be.checked');

        cy.contains(tache)
            .parents('li')
            .should('have.class', 'completed');
    });
});
