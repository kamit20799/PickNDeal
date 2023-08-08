/* Test Case Covered: TC016, TC017, TC018, TC019, TC020, TC021, TC022, TC023, TC024, TC025, TC026, 
TC027, TC028, TC029, TC030, TC031, TC032, TC033, TC034 */

// Import the loginObject from the pageObjects directory
import loginObject from "../pageObjects/LogIn";

// Describe block for the "Adding Profile Details" test suite
describe('Adding Profile Details', () => {
    beforeEach(() => {
        // Visit the registration page before each test case
        cy.visit("user/register");
    })

    const login = new loginObject()

    it('Verify Successful Login', () => {

        // Generate a new email address with random function and write it to a text file
        let newEmail = "johndoe+" + Math.random().toString().substr(2, 4) + "@example.com"
        cy.writeFile('Retailer_email.txt', newEmail)

        // Sign up and verify successful login
        cy.SignUp('Jon', 'Doe', newEmail, '8787888787', 'P@ssw0rd', 'P@ssw0rd')

        /*  TC016   */
        cy.login(newEmail, 'P@ssw0rd')
        cy.verifyURL('profile')
        cy.verifyText(login.userProfile, 'Retailer Name')

        /*  TC017   */
        // Fill in the business name field and verify its content
        cy.get(login.businessName).type('Open Kart')

        /*  TC018   */
        // Select different services and verify their visibility
        cy.get(login.service).click().contains('sub service 1').click()
        cy.contains('sub service 1').should('be.visible')
        
        cy.get(login.service).click().contains('Auto Service').click()
        cy.contains('Auto Service').should('be.visible')
        
        cy.get(login.service).click().contains('amnTest---1').click()
        cy.contains('amnTest---1').should('be.visible')

        cy.get(login.service).click()
            .contains('Party decoration').click()
        cy.contains('Party decoration').should('be.visible')
        
        /*  TC019   */
        // Click on the remove button for a service
        cy.get(login.removeTag1).click()
        
        cy.get(login.removeTag2).click()
        cy.get(login.businessName).click()
        cy.contains('Auto Service').should('not.be.visible')

        /*  TC020   */
        // Enter address details
        cy.get(login.adress1).type('123 Main Road')
        cy.get(login.adress2).type('Chandigarh')
        cy.contains('Chandigarh bus stand').click()


        /*  TC021   */
        // Enter a country name in the dropdown
        cy.get(login.countryDropdown).click()
        cy.get(login.countryDropdown).type('XYZ');

        /*  TC022   */
        // Verify that "No options" text is visible
        cy.contains(login.noOption).should('be.visible');
        cy.wait(2000)

        // Select "India" from the dropdown list
        cy.get(login.countryDropdown).type('{selectall}India{downarrow}');
        cy.get(login.countryDropdown).type('{enter}');

        /*  TC023   */
        // Enter a state name in the dropdown
        cy.get(login.stateDropdown).click()
        cy.get(login.stateDropdown).type('xyz');

        /*  TC024   */
        // Verify that "No options" text is visible
        cy.contains(login.noOption).should('be.visible');
        cy.wait(2000)

        // Select "Chandigarh" from the dropdown list
        cy.get(login.stateDropdown).type('{selectall}Chandigarh{downarrow}');
        cy.get(login.stateDropdown).type('{enter}');

        /*  TC025   */
        // Enter a city name in the dropdown
        cy.get(login.cityDropdown).click()
        // Verify that "No options" text is visible
        cy.get(login.cityDropdown).type('xyz');

        /*  TC026   */
        // Select "Chandigarh" from the dropdown list
        cy.contains(login.noOption).should('be.visible');
        cy.get(login.cityDropdown).type('{selectall}Chandigarh{downarrow}');
        cy.wait(2000)
        cy.get(login.cityDropdown).type('{enter}');

        /*  TC027   */
        // Enter a zip code
        cy.get(login.zipCode).type('134114')

        /*  TC028   */
        // Select a day from the dropdown
        cy.get(login.dayDropdown).select('Friday')

        /*  TC029   */
        // Enter time
        cy.get(login.timeFrom1).type('01:15')
        cy.get(login.timeFrom2).type('02:10')

        /*  TC030   */
        // Click the add button
        cy.get(login.addButton).click()

        cy.get(login.timeFrom3).type('10:15')
        cy.get(login.timeFrom4).type('12:10')


        cy.get(login.addButton).click()
        cy.get(login.timeFrom5).type('03:15')
        cy.get(login.timeFrom6).type('05:10')

        /*  TC031   */
        // Click the delete buttons
        cy.get(login.deleteButton).click()
        cy.get(login.deleteButton).click()

        /*  TC032   */
        // Enter content in the "About" field
        cy.get(login.about).type('Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself." Lorem ipsum presents the sample font and orientation ')

        /*  TC033   */
        // Attach an image file
        cy.get(login.imgUpload).attachFile('download.jpg');

        /*  TC034   */
        // Click the submit button
        cy.get(login.submit).click({force: true})

        // Verify that the URL contains "dashboard"
        cy.verifyURL('dashboard')
    })
})