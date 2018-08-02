// THIS IS NOT JEST, THIS TEST SUITE IS RUN ON MOCHA/CHAI WHICH IS JEST-LIKE

describe('Simple testing with dashboard', () => {
  it('should run through an end-to-end crud operation on the app', () => {
    // we have access to a global cy variable
    // I can just do "/" here because in my cypress.json, I've set basetUrl to locahost:8080
    cy.visit('/');
    cy.get('a').contains('Dashboard').click();
    // "should" and "and" are considered implicit assertions in Cypress
    cy.url().should('include', '/dashboard');

    cy.get('input[data-cy=note-item]')
      .clear()
      .type('apples');
    
    cy.get('input[data-cy=note-item-btn]')
      .clear()
      .type('gold apples for sale');
    
    cy.get('form[data-cy=note-form]').submit();

    cy.get('button[data-cy=note-item-btn]').contains('Update').click();

    cy.get('[data-cy=modal] input[data-cy=note-item]')
      .clear()
      .type('updated apples');

    cy.get('[data-cy=modal] input[data-cy="note-item-btn"]')
      .clear()
      .type('updated apples');

    cy.get('[data-cy=modal] form[data-cy=note-form]').submit();

  });
});