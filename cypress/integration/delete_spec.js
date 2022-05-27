describe('Open Google',() =>{
    it('Google calculater', () =>{
       cy.visit('https://www.google.com')
    cy.get('[name="q"]').type ('google calculator')
    cy.contains('ค้นหาด้วย Google').click()
    cy.get('.TIGsTb').type('100')
    cy.get('[aria-label="ลบ"]').click()
    cy.get('.TIGsTb').type('10')
    cy.get('.TIGsTb').type('=')
    })
})