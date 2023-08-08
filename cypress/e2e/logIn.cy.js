/* Test Case Covered: TC010, TC011, TC012, TC013, TC014, TC015 */

// Import the loginObject from the pageObjects directory
import loginObject from "../pageObjects/LogIn";

// Describe block for the "Log In Page" test suite
describe("Log In Page", () => {
    beforeEach(() => {
        // Visit the homepage before each test case
        cy.visit("/");
    })

    const login = new loginObject()

    /*  TC010   */
    it('Verify successful login for Retailer', () => {
        // Verify initial URL and page elements
        cy.verifyURL('public')
        cy.verifyText(login.h1, 'Sign In')

        // Perform successful login for Retailer and verify profile page
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

        // Perform unsuccessful login with incorrect credentials and verify error message
        cy.login('christui8@example.com', 'P@w0rd')
        cy.verifyURL('login')
        cy.verifyText(login.alert, 'Invalid Login Credentials!')
    })


    /*  TC012  */
    it('Verify Unsuccessful Sign In with Blank Fields', () => {
        cy.verifyText(login.h1, 'Sign In')

        // Click the login button with blank fields and verify URL
        cy.get(login.button).click();
        cy.verifyURL('public')
    })


    /*  TC013  */
    it('Verify Sign Up and Forget Password Button Visibility', () => {

        // Verify initial URL and visibility of Sign Up and Forget Password buttons
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
        // Verify initial URL and visibility of Forget Password button
        cy.verifyURL('public')
        cy.get('a')
            .contains('Forgot your password?')
            .should('be.visible')
            .click()
        
        // Verify URL change and presence of Forget Password heading
        cy.verifyURL('forgot')
        cy.verifyText(login.forget_heading, 'Forgot Password')
    })
})