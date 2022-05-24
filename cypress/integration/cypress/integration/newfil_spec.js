{/* <reference types="Cypress"></reference> */}
describe('Instagram', function(){
    it('Visit Instagram', function(){
        cy.visit('https://www.instagram.com')

        cy.viewport('macbook-15')
        cy.wait(200)
        // cy.get('._9GP1n').type('username')
        // cy.get('#pa_2hvTZ.pexuQ.zyHYPss').type('123456789ABC')
        // cy.contains('submit').click()
        // cy.get('.slfErrorAlert').should('contain','เพื่อรักษาความปลอดภัยให้กับบัญชีผู้ใช้ของคุณ เราจึงได้รีเซ็ตรหัสผ่านของคุณแล้ว คลิก "ลืมรหัสผ่าน" บนหน้าจอการเข้าสู่ระบบแล้วปฏิบัติตามคำแนะนำเพื่อเข้าถึงบัญชีผู้ใช้ของคุณ')
        




    
    })
    

})