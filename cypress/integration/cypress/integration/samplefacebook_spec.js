{/* <reference types="Cypress"></reference> */}
describe('Facebook', function(){
    it('Visit Facebook', function(){
        cy.visit('https://www.facebook.com')

        cy.get('#email').type('admin@gmail.com')
        cy.get('#pass').type('123456789ABC')
        cy.contains('เข้าสู่ระบบ').click()
        cy.get('.uiHeaderTitle').should('contain','คำขอของคุณไม่สามารถดำเนินการได้')
        // cy.get('._2hvTZ').type('1234567890')

        // cy.get('#slfErrorAlert')  
        //.should('contain','The username you entered')




    
    })
    

})