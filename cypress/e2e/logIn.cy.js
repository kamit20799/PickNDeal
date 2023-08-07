/* Test Case Covered: TC010, TC011, TC012, TC013, TC014, TC015 */

import loginObject from "../pageObjects/LogIn";

describe("Log In Page", () => {
    beforeEach(() => {
        cy.visit("/");
    })

    const login = new loginObject()

    /*  TC010   */
    it('Verify successful login for Retailer', () => {
        cy.verifyURL('public')
        cy.verifyText(login.h1, 'Sign In')
        cy.login('johndoe+953@example.com', 'P@ssw0rd')
        cy.verifyURL('profile')
        cy.verifyText(login.userProfile, 'Retailer Name')
    })

    it('Verify successful login for Suplier', () => {
        cy.verifyText(login.h1, 'Sign In')
        cy.login('christui+978@example.com', 'P@ssw0rd')
        cy.verifyURL('profile')
        cy.verifyText(login.userProfile, 'Supplier Name')
    })


    /*  TC011   */
    it('Verify Unsuccessful Sign In with Incorrect Credentials', () => {
        cy.verifyText(login.h1, 'Sign In')
        cy.login('christui8@example.com', 'P@w0rd')
        cy.verifyURL('login')
        cy.verifyText(login.alert, 'Invalid Login Credentials!')
    })


    /*  TC012  */
    it('Verify Unsuccessful Sign In with Blank Fields', () => {
        cy.verifyText(login.h1, 'Sign In')
        cy.get(login.button).click();
        cy.verifyURL('public')
    })


    /*  TC013  */
    it('Verify Sign Up and Forget Password Button Visibility', () => {
        cy.verifyURL('public')
        cy.get('a')
            .contains('Sign Up')
            .should('be.visible')

        cy.get('a')
            .contains('Forgot your password?')
            .should('be.visible')
    })


    /*  TC014  */
    it('Verify Sign Up Button Functionality', () => {
        cy.verifyURL('public')
        cy.get('a')
            .contains('Sign Up')
            .should('be.visible')
            .click()
        
        cy.verifyURL('register')
    })


    /*  TC015  */
    it.only('Verify Forget Password Button Functionality', () => {
        cy.verifyURL('public')
        cy.get('a')
            .contains('Forgot your password?')
            .should('be.visible')
            .click()
        
        cy.verifyURL('forgot')
        cy.verifyText(login.forget_heading, 'Forgot Password')
    })
})