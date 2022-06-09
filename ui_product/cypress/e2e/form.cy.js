describe('Navigation', () => {
    it('should navigate to the about page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
      cy.get('[data-cy=subFormData]').click()
      cy.get('[data-cy=textField]').should('contain' , 'فیلد اجباری است')
      for(let i = 0; i < 4; i++){
        cy.get('[data-cy=textField]').eq(i).type('test')
      }
      cy.get('[data-cy=subFormData]').click()
      cy.get('[data-cy=alert_success]').should('contain' , 'عملیات با موفقیت انجام شد')
  
    })
  })