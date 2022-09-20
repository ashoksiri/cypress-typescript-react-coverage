/// <reference types="cypress" />

describe("renders app correctly", () => {
    it("renders app", () => {
        cy.visit('/');
        cy.get('.App-header').should('exist');
    })
})