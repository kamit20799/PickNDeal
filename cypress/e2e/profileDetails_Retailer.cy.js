/* Test Case Covered: TC016, TC017, TC018, TC019, TC020, TC021, TC022, TC023, TC024, TC025, TC026, 
TC027, TC028, TC029, TC030, TC031, TC032, TC033, TC034 */

import loginObject from "../pageObjects/LogIn";

describe('Adding Profile Details', () => {
    beforeEach(() => {
        cy.visit("user/register");
    })

    const login = new loginObject()

    it('Verify Successful Login', () => {

        let newEmail = "johndoe+" + Math.random().toString().substr(2, 4) + "@example.com"
        cy.writeFile('Retailer_email.txt', newEmail)
        cy.SignUp('Jon', 'Doe', newEmail, '8787888787', 'P@ssw0rd', 'P@ssw0rd')

        /*  TC016   */
        cy.login(newEmail, 'P@ssw0rd')
        cy.verifyURL('profile')
        cy.verifyText(login.userProfile, 'Retailer Name')

        /*  TC017   */
        cy.get(login.businessName).type('Open Kart')

        /*  TC018   */
        cy.get(login.service).click()
            .contains('sub service 1').click()
        cy.contains('sub service 1').should('be.visible')
        
        cy.get(login.service).click()
            .contains('Auto Service').click()
        cy.contains('Auto Service').should('be.visible')
        
        cy.get(login.service).click()
            .contains('amnTest---1').click()
        cy.contains('amnTest---1').should('be.visible')

        cy.get(login.service).click()
            .contains('Party decoration').click()
        cy.contains('Party decoration').should('be.visible')
        
        /*  TC019   */
        cy.get(login.removeTag1).click()
        
        cy.get(login.removeTag2).click()
        cy.get(login.businessName).click()
        cy.contains('Auto Service').should('not.be.visible')

        /*  TC020   */
        cy.get(login.adress1).type('123 Main Road')
        cy.get(login.adress2).type('Chandigarh')
        cy.contains('Chandigarh bus stand').click()


        /*  TC021   */
        cy.get(login.countryDropdown).click()
        cy.get(login.countryDropdown).type('XYZ');

        /*  TC022   */
        cy.contains(login.noOption).should('be.visible');
        cy.wait(2000)
        cy.get(login.countryDropdown).type('{selectall}India{downarrow}');
        cy.get(login.countryDropdown).type('{enter}');

        /*  TC023   */
        cy.get(login.stateDropdown).click()
        cy.get(login.stateDropdown).type('xyz');

        /*  TC024   */
        cy.contains(login.noOption).should('be.visible');
        cy.wait(2000)
        cy.get(login.stateDropdown).type('{selectall}Chandigarh{downarrow}');
        cy.get(login.stateDropdown).type('{enter}');

        /*  TC025   */
        cy.get(login.cityDropdown).click()
        cy.get(login.cityDropdown).type('xyz');

        /*  TC026   */
        cy.contains(login.noOption).should('be.visible');
        cy.get(login.cityDropdown).type('{selectall}Chandigarh{downarrow}');
        cy.wait(2000)
        cy.get(login.cityDropdown).type('{enter}');

        /*  TC027   */
        cy.get(login.zipCode).type('134114')

        /*  TC028   */
        cy.get(login.dayDropdown).select('Friday')

        /*  TC029   */
        cy.get(login.timeFrom1).type('01:15')
        cy.get(login.timeFrom2).type('02:10')

        /*  TC030   */
        cy.get(login.addButton).click()

        cy.get(login.timeFrom3).type('10:15')
        cy.get(login.timeFrom4).type('12:10')


        cy.get(login.addButton).click()
        cy.get(login.timeFrom5).type('03:15')
        cy.get(login.timeFrom6).type('05:10')

        /*  TC031   */
        cy.get(login.deleteButton).click()
        cy.get(login.deleteButton).click()

        /*  TC032   */
        cy.get(login.about).type('Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself." Lorem ipsum presents the sample font and orientation ')

        /*  TC033   */
        cy.get(login.imgUpload).attachFile('download.jpg');

        /*  TC034   */
        cy.get(login.submit).click({force: true})

        cy.verifyURL('dashboard')
    })
})