/// <reference types="Cypress" />

describe("validate github api", () => {

  before(()=> {
    cy.request({
      url:'https://api.github.com/repositories/132619461'

    }).then((response)=>{
      expect(response.status).to.eq(200)
      cy.writeFile('cypress/fixtures/response.json', response.body) //write json to a fixture file
    })
      
  })
    
  it('Validate json structure', () => { 
    cy.fixture('response.json').then(actualResponse => { //Load a fixed set of data located in a file
    cy.fixture('response_to_compare.json').then(dataToCompare => {
            expect(actualResponse).to.have.keys(dataToCompare);
      });
  });
        
  })

  it('validate the presence of the word “seatcode” in the field “owner->login”', () =>{
  cy.fixture('response.json').then(data => {
    expect(data.owner.login).to.eq("seatcode")
    
 });
  } )
  
})
   
