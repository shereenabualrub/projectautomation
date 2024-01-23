/// <reference types= "cypress" />
// 7
const expectedCurrency = "SAR"

// const expectedAttribute = "lang"
//const expectedLanguage = "en"
describe('test cases', () => {
  it('check the currency is SAR', () => {
    cy.visit('https://www.almosafer.com/en?ncr=1')
    
    cy.get('[data-testid="Header__CurrencySelector"]').invoke('text').should('include', expectedCurrency)

    cy.wait(3000)
  })
  it('check the language of the website', () => {
    cy.visit('https://www.almosafer.com/en?ncr=1')

    cy.get('html').should('have.attr', 'lang' ,'en')
    //cy.get('html').should('have.attr', 'expectedAttribute' ,'expectedLanguage')  او ممكن استخدم هاد الكود وبيعطي نفس النتيجة
  });
})
