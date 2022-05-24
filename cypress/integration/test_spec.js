describe('Open Google', () => {
    it('Google', () => {
    

    cy.visit ('https://www.google.com')
    cy.get('input[name="q"]').type ('google calculator')
    cy.contains('ค้นหาด้วย Google').click()
    cy.get('.TIGsTb').type('100')
    cy.get('[aria-label="คูณ"]').click()
    cy.get('.TIGsTb').type('105')
    cy.get('[aria-label="เท่ากับ"]').click()
        
     })
 })   
        // if( input )
        // console.log('asa')  
 
       
        // cy.contains('n').click()
        // cy.get('[name="q"]').type('google calculator')
        // cy.contains('ค้นหาด้วย Google').click()
    

