describe('Page d\'accueil', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3030');
    });

    it('Affiche la page d\'accueil', () => {
        cy.contains('todos').should('exist');
    });

});
