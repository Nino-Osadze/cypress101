/* it('Login User', () => {

    cy.visit('/')
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
    cy.contains('Home').should('be.visible')
// 3. Verify that home page is visible successfully
    cy.contains('Signup / Login').click()
// 4. Click on 'Signup / Login' button
    cy.contains('Login to your account').should('be.visible')
// 5. Verify 'Login to your account' is visible
    cy.get('[data-qa="login-email"]').type(testdata.email)
    cy.get('[data-qa="login-password"]').type(testdata.password)
// 6. Enter correct email address and password
    cy.get('[data-qa="login-button"]').click()
// 7. Click 'login' button
// 8. Verify that 'Logged in as username' is visible
    cy.contains('Logged in as').should('be.visible')
// 9. Click 'Delete Account' button`
    cy.contains('Delete Account').click()
// 10. Verify that 'ACCOUNT DELETED!' is visible
    cy.contains('Account Deleted!').should('be.visible')
}) */ 
    Cypress.Commands.add('login', (email, password) => {
        cy.visit('/')
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
            cy.contains('Home').should('be.visible')
        // 3. Verify that home page is visible successfully
            cy.contains('Signup / Login').click()
        // 4. Click on 'Signup / Login' button
            cy.contains('Login to your account').should('be.visible')
        // 5. Verify 'Login to your account' is visible
            cy.get('[data-qa="login-email"]').type(email)
            cy.get('[data-qa="login-password"]').type(password)
        // 6. Enter correct email address and password
            cy.get('[data-qa="login-button"]').click()
        // 7. Click 'login' button
        
       
      })
    