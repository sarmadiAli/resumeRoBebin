import { sampleData } from './../fixtures/mockData';
describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/list');

    for (let i in sampleData) {
      cy.get('[data-cy=listItem]')
        .eq(i)
        .should('contain', sampleData[i].name)
        .should('contain', sampleData[i].username);
    }
  });
});
