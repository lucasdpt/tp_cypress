describe('Delete task', () => {
    const task = 'Wash the puppy';

    beforeEach(() => {
        cy.visit('http://localhost:3030');
        cy.get('.new-todo').type(`${task}{enter}`);
        cy.contains(task).should('exist');
    });

    afterEach(() => {
        cy.resetDb();
    });

    // Sorry for my approximative english, I'm not a native speacker so please be cool :D
    it('Delete the task created just few moments ago', () => {
        cy.contains(task)
            .parent()
            .find('.destroy')
            .invoke('show')
            .click();
        cy.contains(task).should('not.exist');
    });
});
