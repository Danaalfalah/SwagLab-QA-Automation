///<reference types="cypress"/>
describe('locked_out_user login ', () => {
    it(' to login locked user ', () => {
        cy.visit("https://www.saucedemo.com/",{timeout:10000})
        cy.get('[data-test="username"]').type("locked_out_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        
    });
});