describe('Add new task', () => {
    const newtask = 'Buy a lot of beers';

    beforeEach(() => {
        cy.visit('http://localhost:3030');
    });

    it('Add new task', () => {
        cy.get('.new-todo').type(`${newtask}{enter}`);
        cy.contains(newtask).should('exist');
    });
});
