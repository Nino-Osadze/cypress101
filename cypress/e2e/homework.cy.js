 import testdata from "../fixtures/test_case_data.json"

describe('automationpart3', () => {
// Test Case 1: Register User - 16 step-ის ჩათვლით იუზერი აღარ წაშალოთ

  it('Resgister User', () => {
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
      cy.visit('/')
// 3. Verify that home page is visible successfully
      cy.contains('Home').should('be.visible')
// 4. Click on 'Signup / Login' button
      cy.contains('Signup / Login').click()
// 5. Verify 'New User Signup!' is visible
      cy.contains('New User Signup!').should('be.visible')
// 6. Enter name and email address
      cy.get('[data-qa="signup-name"]').type(testdata.name)
      cy.get('[data-qa="signup-email"]').type(testdata.email)
// 7. Click 'Signup' button
      cy.get('[data-qa="signup-button"]').click()
// 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
      cy.contains("Enter Account Information").should('be.visible')
// 9. Fill details: Title, Name, Email, Password, Date of birth
      cy.get('#id_gender2').click()
      cy.get('[data-qa="password"]').type(testdata.password)
      cy.get('[data-qa="days"]').select(testdata.day)
      cy.get('[data-qa="months"]').select(testdata.month)
      cy.get('[data-qa="years"]').select(testdata.year)
// 10. Select checkbox 'Sign up for our newsletter!'
      cy.get('#newsletter').check()
// 11. Select checkbox 'Receive special offers from our partners!'
      cy.get('#optin').check()
// 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
      cy.get('[data-qa="first_name"]').type(testdata.name)
      cy.get('[data-qa="last_name"]').type(testdata.lastname)
      cy.get('[data-qa="company"]').type(testdata.company)
      cy.get('[data-qa="address"]').type(testdata.addressone)
      cy.get('[data-qa="address2"]').type(testdata.addresstwo)
      cy.get('[data-qa="country"]').select(testdata.country)
      cy.get('[data-qa="state"]').type(testdata.state)
      cy.get('[data-qa="city"]').type(testdata.city)
      cy.get('[data-qa="zipcode"]').type(testdata.zipcode)
      cy.get('[data-qa="mobile_number"]').type(testdata.mob_number)
// 13. Click 'Create Account button'
      cy.contains('Create Account').click()
// 14. Verify that 'ACCOUNT CREATED!' is visible
      cy.contains('Account Created!').should('be.visible')
// 15. Click 'Continue' button
      cy.contains('Continue').click()
// 16. Verify that 'Logged in as username' is visible
       cy.contains('Logged in as').should('be.visible')

  })

 it('Login User with correct email and password', () => {
      
      cy.login(testdata.email, testdata.password)
      // 8. Verify that 'Logged in as username' is visible
      cy.contains('Logged in as').should('be.visible')
       // 9. Click 'Delete Account' button`
       cy.contains('Delete Account').click()
       // 10. Verify that 'ACCOUNT DELETED!' is visible
           cy.contains('Account Deleted!').should('be.visible')
  }) 

  it(' Login User with incorrect email and password', () => {
      cy.login(testdata.inc_email, testdata.inc_password)
      cy.contains('Your email or password is incorrect!').should('be.visible')
       
  }) 
 


})