// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




// it('login', () => {
//     // Navigate to url 'https://automationteststore.com'
//     cy.visit('https://automationteststore.com')
//     // click 'Login or register' button 
//     cy.contains('Login or register').click()
//     // fill out the login name and password
//     // log_in_name : ninotest , password: test001 
//     cy.get('#loginFrm_loginname').type('"ninotest"')
//     cy.get('#loginFrm_password').type('test001')
//     cy.get('#loginFrm > fieldset > .btn').click()

//   }) 

  Cypress.Commands.add('login', (username,password) =>{
    cy.visit('https://automationteststore.com')
    cy.contains('Login or register').click()
    cy.get('#loginFrm_loginname').type(username)
    cy.get('#loginFrm_password').type(password)
    cy.get('#loginFrm > fieldset > .btn').click()
  })
