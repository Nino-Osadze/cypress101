

 describe('template spec', () => {
  /* it('test', () => {
  }) */
   /* beforeEach(() => {
    }) */

}) 


describe('automationstore ', () => {
  // რეგისტრაცია, რომ გავიარე მერე გავიაზრე, რომ ჩვენით უნდა დავრეგისტრირებულიყავით. 
  // ამ ნაწილს არ ვშლი მაინც იყოს იხილეთ ჩემი 37 ხაზიანი "მეცადინეობა " *ტირილის ემოჯი 
  /* it('registration', () => {
    cy.visit('https://automationteststore.com/')
    // your personal details 
    cy.get('#customer_menu_top > li > a').click()
    cy.get('#accountFrm > fieldset > .btn').click()
    cy.get('#AccountFrm_firstname').type('Nino')
    cy.get('#AccountFrm_lastname').type('osadze')
    cy.get('#AccountFrm_email').type('nino@gmail.com')
    cy.get('#AccountFrm_telephone').type('5555555555')
    cy.get('#AccountFrm_fax').type('55555')
    //your address 
    cy.get('#AccountFrm_company').type('testcompany')
    cy.get('#AccountFrm_address_1').type('addresstest1')
    cy.get('#AccountFrm_address_2').type('address.test.2')
    cy.get('#AccountFrm_city').type('testcity')
    
    // ჯერ ქვეყანა უნდა აირჩიო და ქვეყნის მიხედვით გარჩევინებს 
    // შტატს მერე გიჩვენებს არჩეული ქვეყნიდან გამომდინარე. ამიტომ 
    // სელექთში ჯერ ქვეყანა მოვნიშნე და მერე შტატი
    // ამას დავარეპორტებდი, რომ პირიქით აჩვენოს. 
    cy.get('#AccountFrm_postcode').type('55555')
    cy.get('#AccountFrm_country_id').select('Uganda')
    cy.get('#AccountFrm_zone_id').select('Apac')
    // login details 
    cy.get('#AccountFrm_loginname').type('ninotest')
    cy.get('#AccountFrm_password').type('test001')
    cy.get('#AccountFrm_confirm').type('test001')
    // newsletter
    cy.get('#AccountFrm_newsletter0').click()
    //privacypolicy
    cy.get('#AccountFrm_agree').click()
     // confirm 
    cy.get('.col-md-2 > .btn').click()
    // check that account has been created 
    cy.get('.maintext').should('have.text',' Your Account Has Been Created!')
    cy.get('.mb40 > .btn').click() 
  }) */ 
  it('login', () => {
    cy.visit('https://automationteststore.com/')
   
    cy.get('#customer_menu_top > li > a').click()
    cy.get('#loginFrm_loginname').type('ninotest')
    cy.get('#loginFrm_password').type('test001')
    cy.get('#loginFrm > fieldset > .btn').click()
  })
})

