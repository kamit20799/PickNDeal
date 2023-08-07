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
import 'cypress-file-upload';
import signObject from "../pageObjects/signUp";
import loginObject from "../pageObjects/LogIn";

const signup = new signObject()
const login = new loginObject()

Cypress.Commands.add("SignUp", (f_Name, l_Name, email, phoneNumber, password, c_password) => {
    cy.get(signup.firstName).type(f_Name);
    cy.get(signup.lastName).type(l_Name);
    cy.get(signup.email).type(email);
    cy.get(signup.phoneNumber).type(phoneNumber);
    cy.get(signup.password).type(password);
    cy.get(signup.confirmPassword).type(c_password);
    cy.get(signup.button).click();
});

Cypress.Commands.add("verifyText", (path, text) => {
  cy.get(path)
    .invoke("text")
    .then((text) => {
      expect(text).to.be.include(text);
    });
});

Cypress.Commands.add("verifyURL", (url) => {
    cy.url().should("include", url);
});

Cypress.Commands.add("login", (username, password) => {
    cy.get(login.username).type(username)
    cy.get(login.password).type(password);
    cy.get(login.button).click();
});