import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit {string}", (url) => {
    return cy.visit(url);
});

Then("I see {string}", (txt) => {
    return cy.contains(txt);
});

When("I add a task {string}", (task) => {
    return cy.get('.new-todo')
        .type(task)
        .type('{enter}');
});

Then("I see the task {string}", (task) => {
    return cy.get('.todo-list li')
        .filter(`:contains(${task})`)
        .should('exist');
});

When("I delete the task {string}", (task) => {
    return cy.get('.todo-list li')
        .filter(`:contains(${task})`)
        .find('.destroy')
        .invoke('show')
        .click();
});

Then("I do not see the task {string}", (task) => {
    return cy.get('.todo-list li')
        .filter(`:contains(${task})`)
        .should('not.exist');
});