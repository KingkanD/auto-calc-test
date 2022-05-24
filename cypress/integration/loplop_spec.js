describe('open major',() => {
    it('open major',() =>{
        cy.visit('https://www.majorcineplex.com')
        cy.get('#onetrust-accept-btn-handler').click()
    it('Select cinema')
    cy.contains('ภาพยนตร์').click()
    // cy.get('[class="qslsm-dropdown"]').contains('ค้นหาภาพยนตร์').click()
    // cy.get('[class="coveractive-icon"]').contains('').click()
        // cy.get('#2773').contains('ดูเพิ่มเติม').click()
        
        // cy.contains(locationMovie).click()
        // cy.get('[class="icon-nav"]>a').type('จอมเวทย์มหากาฬ ในมัลติเวิร์สมหาภัย')
    })

}) 