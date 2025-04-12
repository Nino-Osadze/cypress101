
// დარეგისტრირდით https://automationteststore.com- ზე, დაწერეთ შემდეგი:
// მომხმარებლის დეტალებს შეცვლა -   Edit account details - + შეამოწმეთ რომ შენახვის შემდეგ ცვლილებები აისახა.
// არსებული მისამართის შეცვლა ან ახალი მისამართის დამატება
// პაროლის შეცვლა
// NOTE: login ფუნქციონალისთვის აუცილებლად შექმენით  custom command რომელსაც შემდეგ ტესტებში გამოიყენებთ

// პ.ს. გამარტივებისთვის შეგიძლიათ ჯერ კომენტარებად ჩამოწეროთ ტესტ ქეისები/სტეპები თუ რა ექშენები უნდა განახორციელოთ და რა შედეგებს ელოდეთ.



// დარეგისტრირდით https://automationteststore.com- ზე, 
// log_in_name : ninotest , password: test001 


describe('automationspart2', () => {

  beforeEach(() => {
    // log in 
    cy.login('ninotest', 'test001')
  })

  it('Edit account details', () => {
    
    // change
    cy.get('.side_account_list').contains('Edit account details').click()
    cy.get('#AccountFrm_telephone').clear()
    cy.get('#AccountFrm_telephone').type('759403746')
    cy.contains('Continue').click() 
   //check 
   cy.get('.alert').should('include.text', 'Your account has been successfully updated.')
    
  }) 
    it('add adress', () => {
      //change
      cy.get('.side_account_list').contains(' Manage Address Book').click()
      cy.contains('New Address').click() 
      cy.get('#AddressFrm_firstname').type('Sherlock')
      cy.get('#AddressFrm_lastname').type('Holmes')
      cy.get('#AddressFrm_company').type('Baker Street Investigations')
      cy.get('#AddressFrm_address_1').type('221B Baker Street')
      cy.get('#AddressFrm_address_2').type('3rd floor, between the violin and the crime scene photos')
      cy.get('#AddressFrm_city').type('London')
      cy.get('#AddressFrm_zone_id').select('Angus')
      cy.get('#AddressFrm_postcode').type('B8K-R1S')
      cy.get('#AddressFrm_default0').check()
      cy.contains('Continue').click() 
      //check
      cy.get('.alert').should('include.text', 'Your address has been successfully inserted')

  }) 

  it('changepassword', () => {
    //change
    cy.get('.side_account_list').contains('Change password').click()
    cy.get('#PasswordFrm_current_password').type('test001')
    cy.get('#PasswordFrm_password').type('test001')
    cy.get('#PasswordFrm_confirm').type('test001')
    cy.contains('Continue').click() 
     //check
    cy.get('.alert').should('include.text', 'Your password has been successfully updated.')
  }) 

}) 