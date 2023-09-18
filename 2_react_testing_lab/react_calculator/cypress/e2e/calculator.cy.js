describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update display of running total when buttons are clicked', () => {
    cy.get('#number1').click()
    cy.get('#number2').click()
    cy.get('#number3').click()
    cy.get('#number4').click()
    cy.get('#number5').click()
    cy.get('#number6').click()
    cy.get('#number7').click()
    cy.get('#number8').click()
    cy.get('#number9').click()
    cy.get('#number0').click()
    cy.get('.display').should('contain', '1234567890')
  })

  it('should update display of running total with results of arithmetical operations performed', () => {
    cy.get('#number5').click()
    cy.get('#operator_add').click()
    cy.get('#number5').click()
    cy.get('#operator_add').click()
    cy.get('.display').should('contain', '10')
    cy.get('#number5').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '15')
  })

})


// You should write tests to ensure the following requirements are met:

// 1. Do the number buttons update the display of the running total?
// 2. Do the arithmetical operations update the display with the result of the operation?
// 3. Can multiple operations be chained together?
// 4. Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
// 5. What does the code do in exceptional circumstances? 
// Specifically, if you divide by zero, what is the effect? 
// Write a test to describe what you'd prefer to happen, 
// and then correct the code to make that test pass 
// (you will need to modify the Calculator model to meet this requirement).