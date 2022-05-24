let log = console.log;

describe('loops' , () =>{
    it('should loop' , () =>{
       
        log('1');
        cy.visit('https://www.google.com');
        log('2');
        cy.get('[name=q]').type('hello world')
        log('3');
        cy.contains()
    // for (let i =0; i < 3; i ++)
    //  log('-', i)
    //  then (() => log ('*', i)

    })
})