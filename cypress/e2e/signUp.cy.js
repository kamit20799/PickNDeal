/* Test Case Covered: TC001, TC002, TC003, TC004, TC005, TC006, TC007, TC008, TC009 */

// Import the signObject from the pageObjects directory
import signObject from "../pageObjects/signUp";

// Describe block for the "Sign Up Page" test suite
describe("Sign Up Page", () => {
  beforeEach(() => {
    // Visit the registration page before each test case
    cy.visit("user/register");        //using environment
  })

  const signup = new signObject()

  /* TC001 */
  it("Sign Up as a Retailer with Valid Details", () => {
    // Click the "Sign Up" button and verify welcome text and URL
    cy.get(signup.button).click()
    cy.verifyURL('register')
    cy.get(signup.h1).contains(signup.welcome_txt);
    
    // Generate a new email address with random function and write it to a text file
    let newEmail = "johndoe+" + Math.random().toString().substr(2, 3) + "@example.com"
    cy.writeFile('Retailer_email.txt', newEmail)

    // Fill in the sign up form with valid details and verify success message
    cy.get(signup.firstName).type("John");
    cy.get(signup.lastName).type("jpe");
    cy.get(signup.email).type(newEmail);
    cy.get(signup.phoneNumber).type("1234567890");
    cy.get(signup.password).type("P@ssw0rd");
    cy.get(signup.confirmPassword).type("P@ssw0rd");
    cy.get(signup.button).click();
    cy.verifyText(signup.alert, 'successfully')               
  })

  // Other test cases have similar structures with different scenarios and verifications

  /* TC002 */
  it("Sign Up as a Supplier with Valid Details", () => {
    cy.get(signup.button).click()
    cy.verifyURL('register')
    cy.get(signup.h1).contains(signup.welcome_txt);
    cy.get(signup.suplier_Profile).click()

    let newEmail = "christui+" + Math.random().toString().substr(2, 3) + "@example.com"
    cy.writeFile('Supplier_email.txt', newEmail)

    //Sign Up using Commands
    cy.SignUp('Chris', 'Tui', newEmail, '1234567890', 'P@ssw0rd', 'P@ssw0rd')
    cy.verifyText(signup.alert, 'successfully')
  })


  /* TC003 */
  it("Sign Up with Password Mismatch", () => {
    cy.get(signup.button).click()
    cy.verifyURL('register')
    cy.get(signup.h1).contains(signup.welcome_txt);
    cy.get(signup.suplier_Profile).click()

    let emailID
    cy.readFile('Supplier_email.txt').then((text) => {
      emailID = text
    })
    cy.then(() => {
      cy.SignUp('Chris', 'Tui', emailID, '1234567890', 'P@sdgg0rd', 'P@ssw0rd')
    })

    cy.verifyText(signup.alert, 'Confirm Password should be same as Password')               
  })


  /* TC004 */
  it("Sign Up with Invalid Email Address", () => {
    cy.get(signup.button).click()
    cy.verifyURL('register')
    cy.get(signup.h1).contains(signup.welcome_txt);
    cy.get(signup.suplier_Profile).click()
    cy.SignUp('Chris', 'Tui', 'invalid.email.example.com', '1234567890', 'P@sdgg0rd', 'P@ssw0rd')
    cy.verifyURL('register')
  })


  /* TC005 */
  it("Sign Up with Existing Email Address", () => {
    cy.get(signup.button).click()
    cy.verifyURL('register')
    cy.get(signup.h1).contains(signup.welcome_txt);
    cy.SignUp('Chris', 'Tui', 'christui+14@example.com', '1234567890', 'P@ssw0rd', 'P@ssw0rd')
    cy.contains("Email already Exist!").should("be.visible");
  })


  /* TC006 */
  it("Sign Up with Empty Required Fields", () => {
    cy.get(signup.button).click()
    cy.SignUp('Chris', 'Tui', 'christui+14@example.com', ' ','P@ssw0rd', 'P@ssw0rd')
    cy.verifyURL('register')
  })


  /* TC007 */
  it("Sign Up with Weak Password", () => {
    cy.get(signup.button).click()
    cy.get(signup.h1).contains(signup.welcome_txt);
    cy.SignUp('Chris', 'Tui', 'christui+14@example.com', '1234567890', 'Pw0d', 'Pw0d')
    cy.verifyText('.alert', "atleast 6 characters")
    cy.verifyURL('register') 
  })


  /* TC008 */
  it("Sign Up with First Name or Last Name Containing Special Characters", () => {
    cy.get(signup.button).click()
    cy.get(signup.h1).contains(signup.welcome_txt);
    cy.SignUp('Joh@n', 'j*pe', 'christui+14@example.com', '1234567890', 'Pw0d', 'Pw0d')
    cy.verifyURL('register') 
  })


  /* TC009 */
  it("Navigate to Login Page on Clicking 'Sign In' Button", () => {
    cy.contains("Sign In").click();

    // Assert that the user is on the login page
    cy.url().should("eq", "https://pickndeal.oidea.online/laravel_app/public/user/login");
  })
});
