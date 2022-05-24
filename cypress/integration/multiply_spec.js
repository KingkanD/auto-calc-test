// let log = console.log
describe('Open Google',() =>{
 it('loop Google', () =>{
    cy.visit('https://www.google.com')
cy.get('[name="q"]').type ('google calculator')
cy.contains('ค้นหาด้วย Google').click()
cy.get('.TIGsTb').type('100')
cy.get('[aria-label="คูณ"]').click()
cy.get('.TIGsTb').type('105')
cy.get('.TIGsTb').type('=')


 })
})

  //  let i = 0 ; i<6; i++)
    //  log('-',i)
    //  then(() => log ('*' ,i)