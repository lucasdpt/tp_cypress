describe('Delete task', () => {
    const tache = 'Wash the puppy';

    beforeEach(() => {
        cy.visit('http://localhost:3030');
        cy.get('.new-todo').type(`${tache}{enter}`);
        cy.contains(tache).should('exist');
    });

    // Sorry for my approximative english, I'm not a native speacker so please be cool :D
    it('Delete the task created just few moments ago', () => {
        cy.contains(tache)
            .parent()
            .find('.destroy')
            .invoke('show')
            .click();
        cy.contains(tache).should('not.exist');
    });
});
